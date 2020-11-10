import React, { useState } from "react";
import styles from "./Pagination.module.css";

export function Pagination(props) {
  const [offset, setOffset] = useState(0);
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  function handleNextPage(e) {
    if (e.target.value === "1") {
      let value = 0;
      props.search(props.term, props.location);
      setOffset(value);
      setButton1(true);
      setButton2(false);
      setButton3(false);
    } else if (e.target.value === "2") {
      let value = offset + 21;
      props.nextPage(props.term, props.location, value);
      setOffset(value);
      setButton1(false);
      setButton2(true);
      setButton3(false);
    } else {
      let value = offset + 20;
      props.nextPage(props.term, props.location, value);
      setOffset(value);
      setButton1(false);
      setButton2(false);
      setButton3(true);
    }
  }

  var btn_state1 = button1 ? "is-current" : "";
  var btn_state2 = button2 ? "is-current" : "";
  var btn_state3 = button3 ? "is-current" : "";

  return (
    <div className={styles["pagination"]}>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          <li>
            <button
              className={`pagination-link ${btn_state1}`}
              aria-label="Page 1"
              aria-current="page"
              value="1"
              onClick={(e) => handleNextPage(e)}
            >
              1
            </button>
          </li>
          <li>
            <button
              className={`pagination-link ${btn_state2}`}
              aria-label="Goto page 2"
              value="2"
              onClick={(e) => handleNextPage(e)}
            >
              2
            </button>
          </li>
          <li>
            <button
              className={`pagination-link ${btn_state3}`}
              aria-label="Goto page 3"
              value="3"
              onClick={(e) => handleNextPage(e)}
            >
              3
            </button>
          </li>
        </ul>
        {/* <div className="pagination-previous">Previous</div>
        <div className={`pagination-next ${styles["pagination-next"]}`}>
          Next page
        </div> */}
      </nav>
    </div>
  );
}
