import React from "react";
import styles from "./People.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
//import { SearchResult } from "../Search/SearchResults/SearchResult/SearchResult";

function handlePeople(value) {
  return { value };
}

export function People() {
  // const [people, setPeople] = useState("0");

  // function handlePeople(value) {
  //   setPeople(value);
  //   return people;
  // }

  return (
    <div className={styles["body"]}>
      <Link to="/">
        {" "}
        <img src={logo} className={styles.logo} alt="logo"></img>
      </Link>

      <div className={styles["parent-block"]}>
        <p className={styles.paragraph}>
          Quick question before we get started....
        </p>
        <p className={styles.paragraph}>How many are going to eat?</p>
        <div classNameName={styles.block}>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              value="2"
              onClick={(e) => handlePeople("2")}
            >
              2
            </button>{" "}
          </Link>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              onClick={(e) => handlePeople("3")}
              value="3"
            >
              3
            </button>
          </Link>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              onClick={(e) => handlePeople("4")}
              value="4"
            >
              4
            </button>
          </Link>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              onClick={(e) => handlePeople("5")}
              value="5"
            >
              5
            </button>
          </Link>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              onClick={(e) => handlePeople("6")}
              value="6"
            >
              6
            </button>
          </Link>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              onClick={(e) => handlePeople("7")}
              value="7"
            >
              7
            </button>
          </Link>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              onClick={(e) => handlePeople("8")}
              value="8"
            >
              8
            </button>
          </Link>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              onClick={(e) => handlePeople("9")}
              value="9"
            >
              9
            </button>
          </Link>
          <Link to="/landing">
            {" "}
            <button
              className={`button is-info is-hovered ${styles["select-button"]}`}
              onClick={(e) => handlePeople("10")}
              value="10"
            >
              10
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { handlePeople };
