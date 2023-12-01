import { MongoClient } from "mongodb";

async function connectToDatabase() {
  return await MongoClient.connect(process.env.MONGO_URI);
}

async function insertToDocuments(client, data) {
  const db = client.db();
  await db.collection("emails").insertOne(data);
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    // email validation here too !
    if (
      !req.body.email ||
      req.body.email.trim() === "" ||
      !req.body.email.includes("@")
    ) {
      return res.status(422).json({ message: "Invalid email address" });
    }

    try {
      const client = await connectToDatabase();
      await insertToDocuments(client, { email: req.body.email });
      client.close();
      return res.status(201).json({ message: "success !" });
    } catch (error) {
      console.log(`Mongo Error: ${error.message}`); // special case for some reason
      return res.status(500).json({ message: `Mongo Error: ${error.message}` });
    }
  }
}
