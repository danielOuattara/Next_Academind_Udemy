export const url = `https://acadmind-nextjs-client-fetch-default-rtdb.europe-west1.firebasedatabase.app/events.json`;

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

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isFeatured === true);
  return featuredEvents;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
