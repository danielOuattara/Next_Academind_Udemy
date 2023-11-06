import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { log } from "node:console";

import * as fs from "node:fs/promises";
import path from "path";

export default function Home(props) {
  console.log("props = ", props);
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  log("context = ", context);
  const filePath = path.join(process.cwd(), "data", "mock-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse([jsonData]);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  // const data = { products: [] }; // for testing
  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    // notFound: true,
    // redirect: {
    //   destination: "/no-data",
    // },
    revalidate: 3,
  };
}
