import EventFilteringResultsTitle from "@/components/events/EventFilteringResultsTitle";
import EventsList from "@/components/events/EventsList";
import { getFilteredEvents } from "@/utilities/utilities";
import { useRouter } from "next/router";

export default function FilteredEventsPage() {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug) {
    return <p className="center">Loading...</p>;
  }

  const dateFilter = {
    year: Number(slug[0]),
    month: Number(slug[1]),
  };

  if (isNaN(dateFilter.year) || isNaN(dateFilter.month)) {
    return (
      <p className="center">Invalid filters. Please adjust filter items</p>
    );
  }

  const date = new Date(dateFilter.year, dateFilter.month);

  const filteredEvents = getFilteredEvents(dateFilter);

  if (filteredEvents.length === 0) {
    return (
      <>
        <EventFilteringResultsTitle date={date} />
        <p className="center">No single event found for those filtering</p>;
      </>
    );
  }

  return (
    <div>
      <EventFilteringResultsTitle date={date} />
      {/* <h1 className="center">
        Filtered Events for{" "}
        {new Date(dateFilter.year, dateFilter.month - 1).toISOString()}
      </h1> */}
      <EventsList items={filteredEvents} />
    </div>
  );
}
