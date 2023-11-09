import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import {
  getEventById,
  getAllEventsStaticPaths,
} from "@/utilities/firebase-utility";

export default function EventDetailPage(props) {
  return (
    <>
      <EventSummary title={props.event.title} />
      <EventLogistics
        date={props.event.date}
        address={props.event.location}
        image={props.event.image}
        imageAlt={props.event.title}
      />
      <EventContent>{props.event.description}</EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

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
