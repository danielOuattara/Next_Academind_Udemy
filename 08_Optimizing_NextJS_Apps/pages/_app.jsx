import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title> Next Featured Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
