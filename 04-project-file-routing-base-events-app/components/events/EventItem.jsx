import Link from "next/link";

export default function EventItem(props) {
  console.log("props = ", props);
  console.log(new Date(props.event.date));
  return (
    <li key={props.event.id}>
      <img src={props.image} alt={props.event.title} />
      <div>
        <div>
          <h2>{props.event.title}</h2>
          <div>
            <time>{new Date(props.event.date)}</time>
          </div>
          <div>
            <address>address</address>
          </div>
        </div>
        <div>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
