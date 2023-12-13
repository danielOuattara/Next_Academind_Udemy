import { useState } from "react";
import * as styles from "../routes/NewPost.module.css";
import Modal from "../components/Modal";

export default function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const changeBodyHandler = (event) => setEnteredBody(event.target.value);
  const changeAuthorHandler = (event) => setEnteredAuthor(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    props.addPostHandler({
      author: enteredAuthor,
      body: enteredBody,
    });
    return props.toggleModalHandler();
  };

  return (
    <Modal toggleModalHandler={props.toggleModalHandler}>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={styles.actions}>
          <button type="button" onClick={props.toggleModalHandler}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}
