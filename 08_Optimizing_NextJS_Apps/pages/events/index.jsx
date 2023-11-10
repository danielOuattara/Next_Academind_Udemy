import EventSearch from "@/components/events/EventSearch";
import EventsList from "@/components/events/EventsList";
import { getAllEvents } from "@/utilities/firebase-utility";
import Head from "next/head";
import { useRouter } from "next/router";

export default function EventsRootPage(props) {
  const router = useRouter();
  const searchEvent = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <Head>
        <title> All Events</title>
        <meta
          name="description"
          content="Find a list of great events around your place. All events"
        />
      </Head>
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
