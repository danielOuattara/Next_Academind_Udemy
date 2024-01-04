import styles from "./profile-form.module.css";
import { useRef, useState } from "react";

export default function ProfileForm(props) {
  const newPasswordRef = useRef();
  const oldPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const newPassword = newPasswordRef.current.value;
    const oldPassword = oldPasswordRef.current.value;

    // Validation TODO in production

    props.handleChangePassword({ newPassword, oldPassword });
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
      </div>
      <div className={styles.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}
