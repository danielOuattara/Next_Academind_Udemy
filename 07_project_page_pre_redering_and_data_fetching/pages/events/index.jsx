import EventSearch from "@/components/events/EventSearch";
import EventsList from "@/components/events/EventsList";
// import { getAllEvents } from "@/utilities/utilities";
import { useRouter } from "next/router";
import { url } from "@/utilities/utilities";

export default function EventsRootPage(props) {
  // const allEvents = getAllEvents();
  const router = useRouter();

  const searchEvent = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventSearch searchEvent={searchEvent} />
      <EventsList items={props.allEvents} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(url);
  // console.log("response = ", response);
  const events = await response.json();

  // console.log("events  = ", events);

  const allEvents = [];
  for (const key in events) {
    // console.log(events[key]);
    allEvents.push({
      id: key,
      title: events[key].title,
      description: events[key].description,
      location: events[key].location,
      date: events[key].date,
      image: events[key].image,
      isFeatured: events[key].isFeatured,
    });
  }

  // console.log("featuredEvents = ", featuredEvents);

  return {
    props: {
      allEvents,
    },
  };
}
