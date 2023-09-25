import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as fs from "node:fs/promises";
import path from "path";

export default function Home(props) {
  // console.log("props in index = ", props);
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
  // console.log("context in index = ", context);
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

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 3, // in second NEW !
  };
}
