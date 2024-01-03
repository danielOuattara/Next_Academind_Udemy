import { connectToDatabase } from "../../../libraries/db_lib";
import { hash } from "bcryptjs";

//-----
export default async function handler(req, res) {
  if (req.method === "POST") {
    // data validation here too !
    if (
      !req.body.email ||
      req.body.email.trim() === "" ||
      !req.body.email.includes("@") ||
      !req.body.password ||
      req.body.password.trim().length < 3
    ) {
      return res.status(422).json({ message: "Invalid email or password" });
    }

    try {
      const client = await connectToDatabase();
      const db = client.db();

      const existingUser = await db
        .collection("users")
        .findOne({ email: req.body.email });

      if (existingUser) {
        client.close();
        return res
          .status(422)
          .json({ message: "Email in use. Choose another email" });
      }
      const hashedPwd = await hash(req.body.password, 13);

      await db
        .collection("users")
        .insertOne({ email: req.body.email, password: hashedPwd });
      client.close();
      return res.status(201).json({ message: true });
    } catch (error) {
      console.log(error);
    }
  }
}
