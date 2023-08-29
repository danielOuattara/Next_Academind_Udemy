import EventsList from "@/components/events/EventsList";
import { getAllEvents } from "@/utilities/utilities";

export default function EventsRootPage() {
  const allEvents = getAllEvents();
  return (
    <div>
      <EventsList items={allEvents} />
    </div>
  );
}
