import { useEffect, useState } from "react";
import MeetupList from "./../components/layout/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const url =
  "https://academind-nextjs-bb45e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json";

export default function AllMeetUpPage() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  const fetchMeetups = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status} `);
      }
      const data = await response.json();
      const tranformedData = [];
      for (const key in data) {
        const singleMeetup = {
          id: key,
          ...data[key],
        };
        tranformedData.push(singleMeetup);
      }

      setMeetups(tranformedData);
    } catch (error) {
      console.log("error.message = ", error.message);
    } finally {
      setLoading(false);
    }
  };

  // console.log("meetups  =", meetups);

  useEffect(() => {
    fetchMeetups();
  }, []);

  return (
    <section>
      <h1> All Meetups</h1>
      {loading && <h2>Loading...</h2>}
      {!loading && <MeetupList meetups={meetups} />}
    </section>
  );
}
