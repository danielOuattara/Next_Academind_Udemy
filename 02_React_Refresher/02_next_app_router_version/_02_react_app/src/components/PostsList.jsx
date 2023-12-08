import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import * as styles from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostList(props) {
  const [postsList, setPostsList] = useState([]);

  const addPostHandler = (objArg) => {
    return setPostsList((prevState) => [...prevState, objArg]);
  };

  return (
    <>
      {props.modalIsOpen && (
        <Modal toggleModalHandler={props.toggleModalHandler}>
          <NewPost
            toggleModalHandler={props.toggleModalHandler}
            addPostHandler={addPostHandler}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        {postsList.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </>
  );
}
