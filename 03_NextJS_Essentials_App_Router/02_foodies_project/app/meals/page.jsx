import MealsGrid from "@/components/meals/meals-grid";
import styles from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Loading from "./loading";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "All Meals",
  description: " Browse Delicious meals, shared by a food-loving community.",
};

async function Meals() {
  revalidatePath("/meals");
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          {" "}
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>

        <p className={styles.cta}>
          <Link href={"/meals/share"}> Share your Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
