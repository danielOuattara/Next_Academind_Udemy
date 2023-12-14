import PostItem from "./PostItem";
import styles from "./PostsGrid.module.css";

export default function PostsGrid(props) {
  return (
    <ul className={styles.grid}>
      {props.posts.map((post) => (
        <PostItem {...post} />
      ))}
    </ul>
  );
}
