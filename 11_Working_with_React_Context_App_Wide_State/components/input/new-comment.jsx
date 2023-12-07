import { useEffect, useRef, useState } from "react";
import classes from "./new-comment.module.css";

export default function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function submitComment(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const comment = commentInputRef.current.value;

    // input validation
    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      return setIsInvalid(true);
    }

    props.addCommentHandler({ email, name, comment });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInvalid) setIsInvalid(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isInvalid]);

  useEffect(() => {
    if (props.success) {
      emailInputRef.current.value = "";
      nameInputRef.current.value = "";
      commentInputRef.current.value = "";
    }
  }, [props.success]);

  return (
    <form className={classes.form} onSubmit={submitComment}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows="5" ref={commentInputRef}></textarea>
      </div>
      <button>Submit</button>
      {isInvalid && (
        <p style={errorStyle}>Please enter a valid email address and text!</p>
      )}
    </form>
  );
}

const baseStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "0.25rem",
};

const successStyle = {
  color: "green",
  ...baseStyle,
};

const errorStyle = {
  color: "red",
  ...baseStyle,
  backgroundColor: "#ffb4b4",
  borderRadius: "4px",
  border: "1px solid red",
};
