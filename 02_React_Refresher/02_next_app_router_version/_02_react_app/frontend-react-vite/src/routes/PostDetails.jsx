import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";
import styles from "./PostDetails.module.css";

export default function PostDetails() {
  console.log("HHHHHHHHHHHHHHHHHHHHHH");
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

const url = "http://localhost:8080/posts";

export async function loader(data) {
  const response = await fetch(`${url}/${data.params.postId}`);
  const responseData = await response.json();
  console.log("responseData = ", responseData);
  return responseData.post;
}
