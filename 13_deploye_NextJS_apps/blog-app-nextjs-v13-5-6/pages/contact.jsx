import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="contact me. Write form to send me some requests or questions"
        />
      </Head>
      <ContactForm />;
    </>
  );
}
