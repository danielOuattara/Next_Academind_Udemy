import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import {
  getEventById,
  getAllEventsStaticPaths,
} from "@/utilities/firebase-utility";

export default function EventDetailPage({ event }) {
  if (!event) {
    return <p>No Event found</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  const paths = await getAllEventsStaticPaths();
  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: await getAllEventsStaticPaths(),
    fallback: true,
  };
}
