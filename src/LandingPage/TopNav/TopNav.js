import React from "react";
import styles from "./TopNav.module.css";
import { Link } from "react-router-dom";

export function TopNav() {
  return (
    <div className={styles["top-nav"]}>
      <div className={styles.left}>
        <span> Write Review</span>
        <span> Events </span>
      </div>

      <div className={styles.right}>
        <span>Login</span>
        <Link to="/register">
          <button className="button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
