import ButtonLink from "../ui/ButtonLink";
import classes from "./results-title.module.css";

export default function EventFilteringResultsTitle(props) {
  const humanReadableDate = new Date(props.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events for {humanReadableDate}</h1>
      <ButtonLink link="/events">Show all events</ButtonLink>
    </section>
  );
}
