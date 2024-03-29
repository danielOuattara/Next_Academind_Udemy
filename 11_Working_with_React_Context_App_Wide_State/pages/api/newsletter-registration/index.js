import {
  connectToDatabase,
  insertToDocuments,
} from "@/utilities/database-utility";

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
      await insertToDocuments(client, "emails", { email: req.body.email });
      // client.close();
      return res.status(201).json({ message: "success !" });
    } catch (error) {
      console.log(`Mongo Error: ${error.message}`); // special case for some reason
      return res.status(500).json({ message: `Mongo Error: ${error.message}` });
    }
  }
}
