import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetUp</Link>{" "}
          </li>
          <li>
            <Link to="new-meetup">NewMettUp</Link>
          </li>
          <li>
            <Link to="favorite">Favorite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
