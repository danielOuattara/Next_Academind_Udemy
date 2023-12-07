import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Notification from "@/components/ui/notification";
import NotificationContextProvider from "@/store/NotificationContext";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title> Next Featured Events</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        <Notification title="title" message="message" status="success" />
      </Layout>
    </NotificationContextProvider>
  );
}
