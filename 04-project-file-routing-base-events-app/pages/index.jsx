import { getFeaturedEvents } from "@/utilities/utilities";
import EventsList from "@/components/events/EventsList";
export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList eventsList={featuredEvents} />
    </div>
  );
}
