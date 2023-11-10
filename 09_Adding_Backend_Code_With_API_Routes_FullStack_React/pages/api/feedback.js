// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import * as fs from "node:fs/promises";
import * as fs from "node:fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "post") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: new Date(),
      email,
      feedback,
    };

    const filePath = path.join(process.cwd(), "dataStorage", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    return res
      .status(201)
      .json({ name: "feedback received successfully !", message: newFeedback });
  }

  return res.status(200).json({ name: "John Doe" });
}
