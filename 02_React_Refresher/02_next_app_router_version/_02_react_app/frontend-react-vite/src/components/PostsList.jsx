import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import * as styles from "./PostsList.module.css";
import Modal from "./Modal";

const url = "http://localhost:8080/posts";

export default function PostList(props) {
  const [postsList, setPostsList] = useState([]);

  const addPostHandler = async (objArg) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objArg),
      });

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return setPostsList((prevState) => [...prevState, objArg]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setPostsList(data.posts);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, []);

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
        <section style={{ textAlign: "center" }}>
          <h2>No post yet. Please add new post</h2>
          <p>Start to add new posts now !</p>
        </section>
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
