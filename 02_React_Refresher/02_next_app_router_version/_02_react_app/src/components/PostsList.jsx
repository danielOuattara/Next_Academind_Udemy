import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import * as styles from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostList(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {props.modalIsOpen && (
        <Modal toggleModalHandler={props.toggleModalHandler}>
          <NewPost
            changeBodyHandler={changeBodyHandler}
            changeAuthorHandler={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author="Max" body="React.js" />
        <Post author="John" body="Next.js" />
      </ul>
    </>
  );
}
