import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import { useNotificationContext } from "@/store/NotificationContext";

export default function Comments(props) {
  const { showNotification } = useNotificationContext();
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  const fetchComments = async () => {
    setIsLoading(true);
    setSuccess(false);
    const response = await fetch(`/api/comments/${props.eventId}`);
    const data = await response.json();
    setComments(() => data.comments);
    setIsLoading(false);
    setSuccess(true);
  };

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
  }, [showComments]);

  async function addCommentHandler(commentObject) {
    // send data to API
    try {
      setIsLoading(true);
      setSuccess(false);
      showNotification({
        title: "Commenting ...",
        message: `Sending comment ford event ${props.eventId}`,
        status: "pending",
      });
      const response = await fetch(`/api/comments/${props.eventId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: props.eventId, ...commentObject }),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      // await fetchComments();
      setIsLoading(false);
      setSuccess(true);
      showNotification({
        title: "success..",
        message: `successfully commented for event ${props.eventId}`,
        status: "success",
      });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setSuccess(false);
      setError(err.message);
      showNotification({
        title: "Error in Signing up ...",
        message: err.message,
        status: "error",
      });
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

      {!isLoading && success && (
        <p style={successStyle}>Successful comment for event {props.eventId}</p>
      )}

      {!isLoading && error && <p style={errorStyle}>{error}</p>}

      {showComments && (
        <CommentList comments={comments} isLoading={isLoading} />
      )}
    </section>
  );
}

const baseStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
};

const successStyle = {
  color: "green",
  ...baseStyle,
};

const errorStyle = {
  color: "red",
  ...baseStyle,
};
