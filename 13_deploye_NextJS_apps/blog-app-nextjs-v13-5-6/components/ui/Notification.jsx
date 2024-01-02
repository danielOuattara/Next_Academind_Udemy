import ReactDOM from "react-dom";
import styles from "./Notification.module.css";

export default function Notification(props) {
  let statusClasses = "";

  if (props.status === "success") {
    statusClasses = styles.success;
  }

  if (props.status === "error") {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>,
    document.getElementById("notifications"),
  );
}
