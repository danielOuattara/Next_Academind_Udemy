import useSWR from "swr";

const url = `https://acadmind-nextjs-client-fetch-default-rtdb.europe-west1.firebasedatabase.app/sales.json`;

const fetcher = async () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const sales = [];
      for (const key in data) {
        sales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      return sales;
    });
};
export default function LastSales() {
  const response = useSWR(url, fetcher);
  const { data, error, isLoading } = response;

  if (error) {
    return <h1>Error: ${error.message}...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <h2>
            {item.username} - {item.volume}
          </h2>
        </li>
      ))}
    </ul>
  );
}
