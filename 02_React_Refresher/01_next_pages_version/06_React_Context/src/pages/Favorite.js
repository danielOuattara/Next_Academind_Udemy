import React from "react";
import { useFavoriteMeetupsContext } from "../context/FavoriteMeetupsContext";
import MeetupItem from "../components/layout/meetups/MeetupItem";
import styles from "./Favorite.module.css";

export default function FavoritePage() {
  const { favoriteMeetups } = useFavoriteMeetupsContext();

  return (
    <section>
      <h2>Favorites meetups</h2>
      <ul className={styles.list}>
        {favoriteMeetups.map((item) => (
          <MeetupItem key={item.id} item={item} id={item.id} />
        ))}
      </ul>
    </section>
  );
}
