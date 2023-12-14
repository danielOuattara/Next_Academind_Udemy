import * as styles from "../routes/NewPost.module.css";
import Modal from "../components/Modal";
import { useNavigate, Form, redirect } from "react-router-dom";

export default function NewPost(props) {
  const navigate = useNavigate();

  const cancelSubmit = () => {
    navigate("/");
  };

  return (
    <Modal toggleModalHandler={props.toggleModalHandler}>
      <Form method="POST" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="author">Your name</label>
          <input type="text" id="author" required name="author" />
        </p>
        <p className={styles.actions}>
          <button type="button" onClick={cancelSubmit}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

const url = "http://localhost:8080/posts";

export async function action(data) {
  console.log("data = ", data);
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}
