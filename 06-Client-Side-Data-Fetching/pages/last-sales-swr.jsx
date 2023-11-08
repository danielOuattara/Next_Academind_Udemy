import useSWR from "swr";
import { useEffect, useState } from "react";

const url = `https://acadmind-nextjs-client-fetch-default-rtdb.europe-west1.firebasedatabase.app/sales.json`;

const fetcher = async () => {
  fetch(url)
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

//-------------------------------------
export default function LastSales(props) {
  const [sales, setSales] = useState(props.sales);

  const response = useSWR(url, fetcher);

  const { data, error } = response;

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        sales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <h1>Error: ${error.message}...</h1>;
  }

  if (!data && !sales) {
    return <h1>Loading...</h1>;
  }

  if (data) {
    setSales(data);
  }

  return (
    <ul>
      {sales.map((item) => (
        <li key={item.id}>
          <h2>
            {item.username} - {item.volume}
          </h2>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
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
      return {
        props: {
          sales,
        },
      };
    });
}
