import * as fs from "node:fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "dataStorage", "comments.json");

  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  if (req.method === "POST") {
    data.push({ commentId: new Date().getTime().toString(), ...req.body });
    fs.writeFileSync(filePath, JSON.stringify(data));

    return res.status(201).json({
      message: "comment created successfully !",
    });
  }
}
