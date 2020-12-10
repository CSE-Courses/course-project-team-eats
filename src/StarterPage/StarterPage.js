import React from "react";
import styles from "./StarterPage.module.css";
import logo from "../assets/logo.png";
import friends from "../assets/friends.png";
import { Link } from "react-router-dom";

export function StarterPage() {
  return (
    <div className={styles.body}>
      <div className={styles["topNav"]}>
        <Link to="/">
          {" "}
          <img src={logo} className={styles.logo} alt="logo"></img>{" "}
        </Link>
        <div className={styles["buttons"]}>
          <Link to="/register">
            {" "}
            <button className={`button is-info  ${styles["start-button"]}`}>
              Get started
            </button>
          </Link>
          <Link to="/login">
            <button class="button is-primary is-outlined">Login</button>
          </Link>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.block}>
        <div className={styles["image-block"]}>
          <img
            src={friends}
            className={styles["friends-image"]}
            alt="starter_image"
          ></img>
          <div className={styles["heading-block"]}>
            <h1 className={styles["heading-first"]}>
              Can't decide where to eat?
            </h1>
            <p className={styles["paragraph-second"]}>
              Search your favorite food, vote among your friends and decide
              where to eat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
