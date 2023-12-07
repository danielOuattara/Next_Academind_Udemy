import { MongoClient } from "mongodb";
import {
  connectToDatabase,
  insertToDocuments,
  getDocumentData,
} from "@/utilities/database-utility";

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect(process.env.MONGO_URI);
  // const db = client.db();

  if (req.method === "POST") {
    const { email, name, comment } = req.body;

    // data validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid inputs" });
    }

    try {
      // const client = await connectToDatabase();
      await insertToDocuments(client, "comments", {
        eventId,
        email,
        name,
        comment,
      });

      return res.status(201).json({
        message: "commented successfully !",
      });
    } catch (error) {
      client.close();
      console.log(`Mongo Error: ${error.message}`); // special case for some reason
      return res.status(500).json({ message: `Mongo Error: ${error.message}` });
    }
  }
  if (req.method === "GET") {
    try {
      const commentList = await getDocumentData(client, "comments", {
        eventId,
      });
      res.status(200).json({ comments: commentList });
    } catch (error) {
      client.close();
      console.log(`Mongo Error: ${error.message}`); // special case for some reason
      return res.status(500).json({ message: `Mongo Error: ${error.message}` });
    }
  }
}
