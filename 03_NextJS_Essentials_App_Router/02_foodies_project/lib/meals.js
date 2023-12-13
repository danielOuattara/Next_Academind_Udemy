import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Something went wrong ! ");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getSingleMeal(slug) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Something went wrong ! ");
  return db.prepare("SELECT * FROM meals WHERE slug= ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(`${meal.title}--${meal.creator}`, { lower: true });
  meal.instructions = xss(meal.instructions);

  const image_extension = meal.image.type.split("/").pop();
  const image_name = `${
    meal.slug
  }-${new Date().getTime()}-image.${image_extension}`;

  const stream = fs.createWriteStream(`public/images/${image_name}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed !");
    }
  });

  meal.image = `/images/${image_name}`;

  return db
    .prepare(
      `
  INSERT INTO meals 
  (
    title, 
    summary, 
    instructions, 
    creator, 
    creator_email, 
    image, 
    slug
    )
    VALUES 
    (     
    @title, 
    @summary, 
    @instructions, 
    @creator, 
    @creator_email, 
    @image, 
    @slug  )

  `,
    )
    .run(meal);
}
