import Head from "next/head";

import { getFeaturedEvents } from "@/utilities/firebase-utility";
import EventsList from "@/components/events/EventsList";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title> Next Events</title>
        <meta
          name="description"
          content="Find a list of great events around your place"
        />
      </Head>
      <EventsList items={props.featuredEvents} />
    </>
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
