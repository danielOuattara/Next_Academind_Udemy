import React from "react";
import * as fs from "node:fs/promises";
import path from "path";

//--------------------------------------------------------------

export default function ProductDetailPage(props) {
  console.log("props in ProductDetailsPage = ", props);

  // NEW , use if fallback = true,
  // but not useful here if product don't exits, like p4
  if (!props.product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
    </>
  );
}

//--------------------------------------------------------------

async function getProductsData() {
  const filePath = path.join(process.cwd(), "data", "mock-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log("data getData = ", data);
  return data;
}

//--------------------------------------------------------------

export async function getStaticProps(context) {
  console.log("context in ProductDetailsPage = ", context);
  const productId = context.params.productId;
  const data = await getProductsData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

//--------------------------------------------------------------

export async function getStaticPaths() {
  const data = await getProductsData();

  const paths = data.products.map((item) => ({
    params: { productId: item.id },
  }));

  console.log("paths getStaticPaths =", paths);

  return {
    paths,
    fallback: true, // NEW !
  };
}

/* 
NEW: 

- Only params in "paths" return property is pre-fetched
- Other page or productId are loaded just-on-time

*/
