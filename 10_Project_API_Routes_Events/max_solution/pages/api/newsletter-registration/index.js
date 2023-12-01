import * as fs from "node:fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(
      process.cwd(),
      "dataStorage",
      "newsletterRegistration.json",
    );

    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    if (req.method === "POST") {
      // do not forget email validation here too !
      if (
        !req.body.email ||
        req.body.email.trim() === "" ||
        !req.body.email.includes("@")
      ) {
        throw new Error("Invalid email address");
      }

      data.push(req.body.email);
      fs.writeFileSync(filePath, JSON.stringify(data));
      return res.status(201).json({
        name: "registration successfully !",
        email: req.body.email,
      });
    }
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
}
