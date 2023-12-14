import Post from "./Post";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const posts = useLoaderData();
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
