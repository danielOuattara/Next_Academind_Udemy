import { useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function toggleCommentsHandler() {
    return setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentObject) {
    // send data to API
    try {
      setIsLoading(true);
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: props.eventId, ...commentObject }),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      // const data = await response.json();
      // console.log("data = ", data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment addCommentHandler={addCommentHandler} />}
      {showComments && (
        <CommentList singleEventComments={props.singleEventComments} />
      )}
    </section>
  );
}

export default Comments;
