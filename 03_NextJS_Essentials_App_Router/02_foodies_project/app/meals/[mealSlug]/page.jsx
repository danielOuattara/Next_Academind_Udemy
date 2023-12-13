import styles from "./page.module.css";
import Image from "next/image";
import { getMeals, getSingleMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const singleMeal = await getSingleMeal(params.mealSlug);
  if (!singleMeal) {
    notFound();
  }
  return {
    title: singleMeal.title,
    description: singleMeal.summary,
  };
}

//-----
export default async function SingleMealPage(props) {
  const singleMeal = await getSingleMeal(props.params.mealSlug);

  if (!singleMeal) {
    notFound();
  }

  singleMeal.instructions = singleMeal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill src={singleMeal.image} alt={singleMeal.title} />
        </div>

        <div className={styles.headerText}>
          <h1>{singleMeal.title}</h1>
          <p className={styles.creator}>
            by{" "}
            <a href={`mailto:${singleMeal.creator_email}`}>
              {singleMeal.creator}
            </a>
          </p>
          <p className={styles.summary}>{singleMeal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: singleMeal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
