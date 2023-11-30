import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import { getEventById } from "@/utilities/utilities";
import { useRouter } from "next/router";

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
