import { useEffect, useState } from "react";

const url = `https://acadmind-nextjs-client-fetch-default-rtdb.europe-west1.firebasedatabase.app/sales.json`;

export default function LastSales() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data = ", data);
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
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
