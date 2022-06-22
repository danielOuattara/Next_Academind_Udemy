import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups.map((item) => (
        <MeetupItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
