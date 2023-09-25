import * as fs from "node:fs/promises";
import path from "path";

export default function Home(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  /* 
  This code will be executed on "npm run build", 
  not on client side  
  */
  const filePath = path.join(process.cwd(), "data", "mock-data.json");
  const jsonData = await fs.readFile(filePath);
  // console.log("jsonData = ", jsonData);

  const data = JSON.parse(jsonData);
  // console.log("data = ", data);

  return {
    props: {
      products: data.products,
    },
  };
}
