import React from "react";
import styles from "./Pagination.module.css";

export function Pagination() {
  return (
    <div className={styles["pagination"]}>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          <li>
            <div className="pagination-link" aria-label="Goto page 1">
              1
            </div>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <div className="pagination-link" aria-label="Goto page 45">
              45
            </div>
          </li>
          <li>
            <div
              className="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
            >
              46
            </div>
          </li>
          <li>
            <div className="pagination-link" aria-label="Goto page 47">
              47
            </div>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <div className="pagination-link" aria-label="Goto page 86">
              86
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
