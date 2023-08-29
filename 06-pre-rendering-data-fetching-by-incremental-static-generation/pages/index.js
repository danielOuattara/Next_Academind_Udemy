import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import * as fs from "node:fs/promises";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// Incremental Static  Generation
export async function getStaticProps(context) {
  console.log("Regenerating...");
  console.log("context = ", context);
  const filePath = path.join(process.cwd(), "data", "mock-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    // NEW !
    revalidate: 3, // in second
  };
}
