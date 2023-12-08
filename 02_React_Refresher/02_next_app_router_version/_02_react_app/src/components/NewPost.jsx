import * as styles from "./NewPost.module.css";

export default function NewPost(props) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={props.changeBodyHandler}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={props.changeAuthorHandler}
        />
      </p>
    </form>
  );
}
