import classes from "./event-summary.module.css";

export default function EventSummary(props) {
  return (
    <section className={classes.summary}>
      <h1>{props.title}</h1>
    </section>
  );
}
