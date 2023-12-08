import NewPost from "./NewPost";
import Post from "./Post";
import * as styles from "./PostsList.module.css";

export default function PostList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Max" body="React.js" />
        <Post author="John" body="Next.js" />
      </ul>
    </>
  );
}
