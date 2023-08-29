import * as styles from "./event-item.module.css";
import ButtonLink from "../ui/ButtonLink";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export default function EventItem(props) {
  const humanReadableDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={styles.item}>
      <img src={"/" + props.image} alt={props.title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{props.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{props.location.replace(",", "\n")}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <ButtonLink link={`/events/${props.id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </ButtonLink>
        </div>
      </div>
    </li>
  );
}
