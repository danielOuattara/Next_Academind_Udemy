export default function handler(req, res) {
  try {
    if (req.method === "POST") {
      // do not forget email validation here too !
      if (
        !req.body.email ||
        req.body.email.trim() === "" ||
        !req.body.email.includes("@")
      ) {
        throw new Error("Invalid email address");
      }

      console.log(req.body.email);

      return res.status(201).json({
        name: "registration successfully !",
        email: req.body.email,
      });
    }
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
}
