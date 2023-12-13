import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import * as styles from "./PostsList.module.css";
import Modal from "./Modal";

const url = "http://localhost:8080/posts";

export default function PostList(props) {
  const [postsList, setPostsList] = useState([]);
  const [isPostingData, setIsPostingData] = useState(false);
  const [isGettingData, setIsGettingData] = useState(false);

  const addPostHandler = async (objArg) => {
    try {
      setIsPostingData(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objArg),
      });

      if (!response.ok) {
        setIsPostingData(false);
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      setIsPostingData(false);
      return setPostsList((prevState) => [...prevState, objArg]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsGettingData(true);
        const response = await fetch(url);
        if (!response.ok) {
          setIsGettingData(false);
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setIsGettingData(false);
        return setPostsList(data.posts);
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

      {isGettingData && (
        <section style={{ textAlign: "center" }}>
          <h2>Loading...</h2>
          <p>please wait </p>
        </section>
      )}

      {isPostingData && (
        <section style={{ textAlign: "center" }}>
          <h2>Posting...</h2>
          <p>please wait </p>
        </section>
      )}

      {!isGettingData && postsList.length === 0 && (
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
