// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import * as fs from "node:fs/promises";
import * as fs from "node:fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "dataStorage", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  if (req.method === "POST") {
    // do not forget data validation here also !
    const newFeedback = {
      id: new Date(),
      email: req.body.email,
      feedback: req.body.feedback,
    };
    // console.log("data = ", data);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    return res
      .status(201)
      .json({ name: "feedback received successfully !", message: newFeedback });
  }
  if (req.method === "GET") {
    return res.status(200).json({ data });
  }
}
