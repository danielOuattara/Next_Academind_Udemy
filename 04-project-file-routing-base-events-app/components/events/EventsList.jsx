// import { getFeaturedEvents } from "@/utilities/utilities";

import EventItem from "./EventItem";

export default function EventsList(props) {
  // const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <ul>
        {props.eventsList.map((event) => (
          <EventItem event={event} />
        ))}
      </ul>
    </div>
  );
}
