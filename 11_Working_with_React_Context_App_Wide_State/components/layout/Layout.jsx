import Notification from "../ui/notification";
import MainHeader from "./MainHeader";
import { useNotificationContext } from "@/store/NotificationContext";

export default function Layout(props) {
  const { notification, message, hideNotification, showNotification } =
    useNotificationContext();
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
}
