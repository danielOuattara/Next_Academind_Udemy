import EventSearch from "@/components/events/EventSearch";
import EventsList from "@/components/events/EventsList";
import { getAllEvents } from "@/utilities/utilities";
import { useRouter } from "next/router";

export default function EventsRootPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  const searchEvent = (year, month) => router.push(`/events/${year}/${month}`);
  return (
    <>
      <EventSearch searchEvent={searchEvent} />
      <EventsList items={allEvents} />
    </>
  );
}
