"use client";

export default function Error(props) {
  console.log("error props = ", props);
  return (
    <main className="error">
      <h1>error happened</h1>
      <p>Failed to create your meal </p>
    </main>
  );
}
