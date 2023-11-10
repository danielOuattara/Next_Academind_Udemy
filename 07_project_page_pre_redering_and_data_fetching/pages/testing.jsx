import React from "react";
import useSWR from "swr";

const url = `https://acadmind-nextjs-client-fetch-default-rtdb.europe-west1.firebasedatabase.app/events.json`;

const fetchAllEvents = async () => {
  console.log("----------- In fetchAllEvents -------------");
  const response = await fetch(url);
  console.log("response = ", response);
  const events = await response.json();
  return events;
};

export default function Testing() {
  console.log("------ In testing page ------");

  const { data, isLoading, error } = useSWR("testing", fetchAllEvents);
  console.log("====================================");
  console.log(data);

  return <div></div>;
}
