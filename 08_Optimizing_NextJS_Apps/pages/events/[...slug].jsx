import EventFilteringResultsTitle from "@/components/events/EventFilteringResultsTitle";
import EventsList from "@/components/events/EventsList";
import { getFilteredEvents } from "@/utilities/firebase-utility";

export default function FilteredEventsPage(props) {
  if (props.hasError) {
    return (
      <p className="center">Invalid filters. Please adjust filter items</p>
    );
  }

  const date = new Date(props.year, props.month - 1);

  if (props.filteredEvents.length === 0) {
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

      <EventsList items={props.filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const dateFilter = {
    year: Number(context.params.slug[0]),
    month: Number(context.params.slug[1]),
  };

  if (
    isNaN(dateFilter.year) ||
    isNaN(dateFilter.month) ||
    dateFilter.month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents(dateFilter);

  return {
    props: {
      filteredEvents,
      year: dateFilter.year,
      month: dateFilter.month,
    },
  };
}
