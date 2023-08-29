import EventSearch from "@/components/events/EventSearch";
import EventsList from "@/components/events/EventsList";
import { getAllEvents } from "@/utilities/utilities";

export default function EventsRootPage() {
  const allEvents = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventsList items={allEvents} />
    </>
  );
}
