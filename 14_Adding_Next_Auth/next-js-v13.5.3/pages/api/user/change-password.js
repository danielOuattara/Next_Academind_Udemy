import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method !== "PATCH") return;

  const session = await getSession({ req });

  if (!session) return res.status(401).json({ message: "Not Authorized !" });
}
