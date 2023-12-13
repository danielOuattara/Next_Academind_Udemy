"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// "use server" creates a "server action", a function guarantied to work ONLY on server

function isInvalidText(text) {
  if (!text || text.trim() === "") {
    return true;
  }
  return false;
}

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
  };

  // input validation "server side"

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Error in Creating new Meal: inputs are not valid");
  }

  await saveMeal(meal);
  redirect("/meals");
}
