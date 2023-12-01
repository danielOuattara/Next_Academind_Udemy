import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  console.log("eventId = ", eventId);
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();

  if (req.method === "POST") {
    try {
      const { email, name, comment } = req.body;

      // data validation
      if (
        !email ||
        !email.includes("@") ||
        !name ||
        name.trim() === "" ||
        !comment ||
        comment.trim() === ""
      )
        throw new Error("invalid input");

      await db.collection("comments").insertOne({
        eventId,
        email,
        name,
        comment,
      });

      client.close();

      return res.status(201).json({
        message: "commented successfully !",
      });
    } catch (error) {
      console.log(error);
      if (error instanceof MongoServerError) {
        console.log(`Mongo Error: ${error.message}`); // special case for some reason
      }
      return res.status(422).json({ message: error.message });
    }
  }
  if (req.method === "GET") {
    const commentList = await db
      .collection("comments")
      .find({ eventId: eventId })
      .sort({ _id: -1 })
      .toArray();
    client.close();
    res.status(200).json({ comments: commentList });
  }
}
