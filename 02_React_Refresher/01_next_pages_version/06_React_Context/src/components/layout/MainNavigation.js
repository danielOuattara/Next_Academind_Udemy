import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { useFavoriteMeetupsContext } from "../../context/FavoriteMeetupsContext";

function MainNavigation() {
  const { totalFavorite } = useFavoriteMeetupsContext();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetUp</Link>{" "}
          </li>
          <li>
            <Link to="new-meetup">NewMeetUp</Link>
          </li>
          <li>
            <Link to="favorite">Favorites</Link>
            <span className={styles.badge}>{totalFavorite}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
