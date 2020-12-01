import React from "react";
import logo from "../assets/logo.png";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export function NavBar(props) {
  return (
    <div className={styles["nav-bar"]}>
      <Link to="/landing">
        <img src={logo} className={styles.logo} alt="belb_logo"></img>
      </Link>
      <SearchBar
        small
        term={props.term}
        location={props.location}
        search={props.search}
      />
      <Link to="/dashboard">
        <button className={`button ${styles["nav-button"]}`}>
          {" "}
          <i className={`fas fa-user ${styles["profile-icon"]}`}></i>
          <span>View Profile</span>
        </button>
      </Link>
    </div>
  );
}
