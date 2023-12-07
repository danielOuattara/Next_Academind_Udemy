import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

export default function MealsGrid(props) {
  return (
    <ul className={styles.meals}>
      {props.meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
