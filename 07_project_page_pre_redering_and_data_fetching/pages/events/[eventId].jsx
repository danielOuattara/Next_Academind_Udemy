import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import { getEventById } from "@/utilities/utilities";
import { useRouter } from "next/router";
import { url } from "@/utilities/utilities";

export default function EventDetailPage() {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

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

export async function getStaticProps() {
  const response = await fetch(url);
  // console.log("response = ", response);
  const events = await response.json();

  // console.log("events  = ", events);

  const featuredEvents = [];
  for (const key in events) {
    // console.log(events[key]);
    if (events[key].isFeatured) {
      featuredEvents.push({
        id: key,
        title: events[key].title,
        description: events[key].description,
        location: events[key].location,
        date: events[key].date,
        image: events[key].image,
        isFeatured: events[key].isFeatured,
      });
    }
  }

  // console.log("featuredEvents = ", featuredEvents);

  return {
    props: {
      featuredEvents,
    },
  };
}
