import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetUpForm from "../components/layout/meetups/NewMeetUpForm";

const url =
  "https://academind-nextjs-bb45e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json";

export default function NewMeetUpPage() {
  let navigate = useNavigate();

  const addMeetupHandler = async (meetupData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meetupData),
      });
      // console.log("response = ", response);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status} `);
      }
      const data = await response.json();
      // console.log("data = ", data);
      navigate("/", { replace: true });
    } catch (error) {
      console.log("error.message = ", error.message);
    }
  };

  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetUpForm addMeetupHandler={addMeetupHandler} />
    </section>
  );
}
