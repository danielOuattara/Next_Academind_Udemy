// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    // quick data validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input" });
    }

    let client;

    try {
      client = await MongoClient.connect(process.env.MONGO_URI);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    const db = client.db();

    let result;

    try {
      result = await db
        .collection("form_messages")
        .insertOne({ email, name, message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    client.close();

    return res.status(201).json({
      server_message: "Success",
      id: result.insertedId,
      email,
      message,
    });
  }
}

//---------------------------------------------------------------

// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req, res) {
//   console.log("req = ", req);
//   if (req.method === "POST") {
//     const formData = await req.formData();
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");

//     // data validation
//     if (
//       !email ||
//       // !email.includes("@") ||
//       !name ||
//       name.trim() === "" ||
//       !message ||
//       message.trim() === ""
//     ) {
//       res.status(422).json({ message: "Invalid input" });
//     }
//     const newMessage = { email, name, message };
//     console.log(newMessage);
//     return res.status(201).json({ message: "Success", newMessage });
//   }
// }
