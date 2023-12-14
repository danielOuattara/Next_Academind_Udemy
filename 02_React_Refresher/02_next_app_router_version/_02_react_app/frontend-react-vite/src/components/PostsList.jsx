import Post from "./Post";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

export default function PostList(props) {
  const posts = useLoaderData();
  // const addPostHandler = async (objArg) => {
  //   try {
  //     setIsPostingData(true);
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(objArg),
  //     });

  //     if (!response.ok) {
  //       setIsPostingData(false);
  //       throw new Error(`${response.status}: ${response.statusText}`);
  //     }

  //     setIsPostingData(false);
  //     return setPostsList((prevState) => [...prevState, objArg]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      {posts.length === 0 && (
        <section style={{ textAlign: "center" }}>
          <h2>No post yet. Please add new post</h2>
          <p>Start to add new posts now !</p>
        </section>
      )}

      {posts.length !== 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </ul>
      )}
    </>
  );
}
