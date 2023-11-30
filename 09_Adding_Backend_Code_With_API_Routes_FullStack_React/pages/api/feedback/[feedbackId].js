import * as fs from "node:fs";
import path from "path";

/* 
/api/feedback2/some-id
*/
export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "dataStorage", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  const singleFeedback = data.find((item) => item.id === req.query.feedbackId);
  console.log("singleFeedback = ", singleFeedback);
  return res.status(200).json({ singleFeedback });
}
