import EventItem from "./EventItem";
import * as styles from "./events-list.module.css";
export default function EventsList(props) {
  return (
    <>
      <ul className={styles.list}>
        {props.items.map((singleEvent) => (
          <EventItem key={singleEvent.id} {...singleEvent} />
        ))}
      </ul>
    </>
  );
}
