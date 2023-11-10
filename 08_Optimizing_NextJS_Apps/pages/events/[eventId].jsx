import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import {
  getEventById,
  getAllEventsStaticPaths,
} from "@/utilities/firebase-utility";
import Head from "next/head";

export default function EventDetailPage(props) {
  if (!props.event) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title> {props.event.title}</title>
        <meta
          name="description"
          content={`${props.event.title} event around your place`}
        />
      </Head>
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

  return {
    props: {
      event,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  return {
    paths: await getAllEventsStaticPaths(),
    fallback: true,
  };
}
