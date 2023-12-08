import * as styles from "./NewPost.module.css";
import { useRef, useState } from "react";

export default function NewPost() {
  const [text, setText] = useState("");

  const changeBodyHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}
