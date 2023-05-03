import styles from "./MeetupItem.module.css";
import Card from "./../../UI/Card";
import { useFavoriteMeetupsContext } from "../../../context/FavoriteMeetupsContext";

export default function MeetupItem(props) {
  const { isFavorite, addToFavoriteMeetups, removeFromFavoriteMeetups } =
    useFavoriteMeetupsContext();

  const meetupIsFavorite = isFavorite(props.item.id);

  const toggleFavorite = () => {
    if (meetupIsFavorite) {
      removeFromFavoriteMeetups(props.item.id);
    } else {
      addToFavoriteMeetups(props.item);
    }
  };

  const defineAction = () => {
    if (meetupIsFavorite) {
      return "Remove From Favorite";
    } else {
      return "Add To Favorite";
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.item.image} alt={props.item.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.item.title}</h3>
          <address>{props.item.address}</address>
          <p>{props.item.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavorite}> {defineAction()}</button>
        </div>
      </Card>
    </li>
  );
}
