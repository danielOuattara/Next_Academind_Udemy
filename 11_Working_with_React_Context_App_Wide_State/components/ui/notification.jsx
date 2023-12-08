import styles from "./notification.module.css";
import { useNotificationContext } from "@/store/NotificationContext";

export default function Notification(props) {
  const { hideNotification } = useNotificationContext();

  let statusClasses = "";

  if (props.status === "success") {
    statusClasses = styles.success;
  }

  if (props.status === "error") {
    statusClasses = styles.error;
  }

  if (props.status === "pending") {
    statusClasses = styles.pending;
  }

  const activeClasses = `${styles.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
}
