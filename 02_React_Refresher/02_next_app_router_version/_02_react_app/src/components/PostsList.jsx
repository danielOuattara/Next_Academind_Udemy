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

      {postsList.length === 0 && (
        <h2 style={{ textAlign: "center" }}>
          No post yet. Please add new post
        </h2>
      )}

      {postsList.length !== 0 && (
        <ul className={styles.posts}>
          {postsList.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </ul>
      )}
    </>
  );
}
