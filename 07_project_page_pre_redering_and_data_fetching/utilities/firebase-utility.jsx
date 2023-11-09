export const url = `https://acadmind-nextjs-client-fetch-default-rtdb.europe-west1.firebasedatabase.app/events.json`;

//---------------------------------------
export async function getAllEvents() {
  const response = await fetch(url);
  const events = await response.json();

  const allEvents = [];
  for (const key in events) {
    allEvents.push({
      id: key,
      ...events[key],
    });
  }
  return allEvents;
}

//---------------------------------------
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isFeatured === true);
  return featuredEvents;
}

//---------------------------------------
export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

//---------------------------------------
export async function getAllEventsStaticPaths() {
  const allEvents = await getAllEvents();
  return allEvents.map((event) => ({
    params: { eventId: `${event.id}` },
  }));
}

//---------------------------------------
export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
