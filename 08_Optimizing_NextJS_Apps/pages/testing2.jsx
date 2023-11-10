import useSWR from "swr";

const dataFetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function Testing2() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    dataFetcher,
  );
  console.log("data = ", data);

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!data) {
    return <h2>Loading ...</h2>;
  }

  return (
    <>
      <h1>Testing 2</h1>
    </>
  );
}
