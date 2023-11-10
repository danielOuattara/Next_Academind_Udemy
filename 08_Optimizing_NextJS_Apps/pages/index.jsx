import { getFeaturedEvents } from "@/utilities/firebase-utility";
import EventsList from "@/components/events/EventsList";

export default function HomePage(props) {
  return (
    <div>
      <EventsList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
    revalidate: 600, // 30 mins
  };
}
