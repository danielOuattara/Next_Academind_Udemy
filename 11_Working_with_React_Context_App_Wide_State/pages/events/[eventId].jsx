import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import Comments from "@/components/input/comments";


import {
  getEventById,
  getAllEventsStaticPaths,
} from "@/utilities/firebase-utility";
import Head from "next/head";

export default function EventDetailPage(props) {
  if (!props.event) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{props.event.title}</title>
        <meta
          name="description"
          content={`${props.event.title} event around your place`}
        />
      </Head>
      <EventSummary title={props.event.title} />
      <EventLogistics
        date={props.event.date}
        address={props.event.location}
        image={props.event.image}
        imageAlt={props.event.title}
      />
      <EventContent>{props.event.description}</EventContent>
      <Comments eventId={props.event.id} />
    </>
  );
}

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);
  // const filePath = path.join(process.cwd(), "dataStorage", "comments.json");
  // const fileData = fs.readFileSync(filePath);
  // const allCommentsData = JSON.parse(fileData);
  // const singleEventComments = allCommentsData.filter(
  //   (comment) => comment.eventId === context.params.eventId,
  // );
  // console.log("singleEventComments = ", singleEventComments);
  // console.log("commentData = ", commentData);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
      // singleEventComments,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  return {
    paths: await getAllEventsStaticPaths(),
    fallback: true,
  };
}
