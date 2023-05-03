import React from "react";
import Link from "next/link";

export default function ClientPage() {
  const clientsList = [
    { id: "john-doe", name: "John " },
    { id: "danny-boy", name: "Daniel" },
  ];
  return (
    <div>
      <h1>Clients Root Page</h1>
      <ul>
        <li>
          <Link href="/clients/maximilian">Maximilian</Link>
        </li>
        <li>
          <Link href="/clients/daniel">Daniel</Link>
        </li>
      </ul>

      {/*  OR  */}

      <ul>
        {clientsList.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.name}`}>{client.name}</Link>
          </li>
        ))}
      </ul>

      {/*  OR  */}

      <ul>
        {clientsList.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[clientId]",
                query: { clientId: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
