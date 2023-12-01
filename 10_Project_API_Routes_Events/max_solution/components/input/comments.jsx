import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const fetchComments = async () => {
    setSuccess(false);
    const response = await fetch(`/api/comments/${props.eventId}`);
    const data = await response.json();
    setComments(() => data.comments);
    setSuccess(true);
  };

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentObject) {
    // send data to API
    try {
      setIsLoading(true);
      const response = await fetch(`/api/comments/${props.eventId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: props.eventId, ...commentObject }),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      setIsLoading(false);

      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && (
        <NewComment addCommentHandler={addCommentHandler} success={success} />
      )}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
