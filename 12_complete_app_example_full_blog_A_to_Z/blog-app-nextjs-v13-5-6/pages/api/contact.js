// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // data validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
    }
  }
  const newMessage = { email, name, message };
  console.log(newMessage);

  res.status(201).json({ message: "Success", newMessage });
}
