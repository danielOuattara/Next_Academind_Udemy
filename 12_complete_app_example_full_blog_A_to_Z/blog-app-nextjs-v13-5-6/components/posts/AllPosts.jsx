import styles from "./AllPosts.module.css";
import PostsGrid from "./PostsGrid";

export default function AllPosts(props) {
  return (
    <section className={styles.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
