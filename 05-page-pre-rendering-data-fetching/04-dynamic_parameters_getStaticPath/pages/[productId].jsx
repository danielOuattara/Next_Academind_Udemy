import React from "react";
import * as fs from "node:fs/promises";
import path from "path";

//--------

export default function ProductDetailPage(props) {
  console.log("props in ProductDetailsPage = ", props);
  return (
    <>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
    </>
  );
}

//--------

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

//--------

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "p1" } },
      { params: { productId: "p2" } },
      { params: { productId: "p3" } },
    ],
    fallback: false,
  };
}
