import React from "react";
import * as fs from "node:fs/promises";
import path from "path";

export default function ProductDetailPage(props) {
  console.log("props in ProductDetailsPage = ", props);

  // if (!props.product) {
  //   // NEW , use if fallback = true
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  console.log("context in ProductDetailsPage = ", context);

  const productId = context.params.productId;
  const filePath = path.join(process.cwd(), "data", "mock-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse([jsonData]);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { productId: "p1" } }],
//     paths: [{ params: { productId: "p2" } }],
//     paths: [{ params: { productId: "p3" } }],
//     fallback: false,
//   };
// }

// OR

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { productId: "p1" } }],
//     // paths: [{ params: { productId: "p2" } }],
//     // paths: [{ params: { productId: "p3" } }],
//     fallback: true, // NEW
//   };
// }

// OR

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "p1" } }],
    // paths: [{ params: { productId: "p2" } }],
    // paths: [{ params: { productId: "p3" } }],
    fallback: "blocking", // NEW
  };
}

/* 
NEW: 

- Only params in "paths" return property is pre-fetched
- Other page or productId are loaded just-on-time

*/
