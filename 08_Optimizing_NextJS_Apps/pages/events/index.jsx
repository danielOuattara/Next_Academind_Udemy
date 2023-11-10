import EventSearch from "@/components/events/EventSearch";
import EventsList from "@/components/events/EventsList";
import { getAllEvents } from "@/utilities/firebase-utility";
import { useRouter } from "next/router";

export default function EventsRootPage(props) {
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
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents,
    },
    revalidate: 600,
  };
}
