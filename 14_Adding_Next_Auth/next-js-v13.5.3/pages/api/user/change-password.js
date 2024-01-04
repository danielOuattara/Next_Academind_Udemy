import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { connectToDatabase } from "../../../libraries/db_lib";
import { compare, hash } from "bcryptjs";

// const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req, res) {
  if (req.method !== "PATCH") return;

  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: "Not Authorized !" });

  if (
    !req.body.oldPassword ||
    req.body.oldPassword.trim().length < 3 ||
    !req.body.newPassword ||
    req.body.newPassword.trim().length < 3
  ) {
    return res.status(422).json({ message: "Invalid email or password" });
  }

  const client = await connectToDatabase();
  const user = await client
    .db()
    .collection("users")
    .findOne({ email: session.user.email });

  if (!user) {
    client.close();
    return res.status(403).json({ message: "Not Authorized !" });
  }

  const isValidPassword = await compare(req.body.oldPassword, user.password);
  if (!isValidPassword) {
    client.close();
    return res.status(403).json({ message: "Not Authorized !" });
  }

  const newHashedPwd = await hash(req.body.newPassword, 13);

  const result = await client
    .db()
    .collection("users")
    .updateOne(
      { email: session.user.email },
      { $set: { password: newHashedPwd } },
    );

  console.log("result = ", result);
  client.close();
  return res.status(201).json({ message: "Password updated successfully" });
}
