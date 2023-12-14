import * as styles from "./Post.module.css";
import { Link } from "react-router-dom";

export default function Post(props) {
  console.log("props.id = ", props.id);
  return (
    <li className={styles.post}>
      <Link to={`/${props.id}`}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.text}>{props.body}</p>
      </Link>
    </li>
  );
}
