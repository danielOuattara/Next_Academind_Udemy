export default function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, comment } = req.body;

    // data validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    )
      return res.status(422).json({ message: "invalid input" });

    const newComment = {
      commentId: new Date().getTime().toString(),
      ...req.body,
    };

    console.log("newComment =", newComment);

    return res.status(201).json({
      message: "comment created successfully !",
      comment: newComment,
    });
  }
  if (req.method === "GET") {
    const commentList = [
      { commentId: "c1", name: "c1 name", comment: "c1 comment content" },
      { commentId: "c2", name: "c2 name", comment: "c2 comment content" },
      { commentId: "c3", name: "c3 name", comment: "c3 comment content" },
    ];

    res.status(200).json({ comments: commentList });
  }
}
