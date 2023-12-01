import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // email validation here too !
      if (
        !req.body.email ||
        req.body.email.trim() === "" ||
        !req.body.email.includes("@")
      ) {
        throw new Error("Invalid email address");
      }

      // const client = new MongoClient(process.env.MONGO_URI);
      // await client.connect();
      // const db = client.db();
      // await db.collection("emails").insertOne({ email: req.body.email });
      // client.close();

      // OR

      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db();
      await db.collection("emails").insertOne({ email: req.body.email });
      client.close();

      return res.status(201).json({ message: "success !" });
    }
  } catch (error) {
    console.log(error);
    if (error instanceof MongoServerError) {
      console.log(`Mongo Error: ${error.message}`); // special case for some reason
    }
    return res.status(422).json({ message: error.message });
  }
}
