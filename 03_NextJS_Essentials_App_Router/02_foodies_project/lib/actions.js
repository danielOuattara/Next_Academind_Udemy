"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// "use server" creates a "server action", a function guarantied to work ONLY on server

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instruction: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
}
