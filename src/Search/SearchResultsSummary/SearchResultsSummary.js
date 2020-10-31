import React, { useState } from "react";
//import { connect } from "react-redux";
import styles from "./SearchResultsSummary.module.css";

export function SearchResultsSummary(props) {
  const [price, setPrice] = useState("");

  function submitFilter(e) {
    if (typeof props.searchWithFilter === "function") {
      props.searchWithFilter(props.term, props.location, price);
    }
    console.log(price);
    e.preventDefault();
  }
  let resultStats = null;
  if (props.amountResults && props.shownResults) {
    resultStats = (
      <p>
        Showing 1-{props.shownResults} out of {props.amountResults} results{" "}
      </p>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles["search-summary"]}>
        <h1 className="subtitle">
          <strong>{props.term}</strong> {props.location}
        </h1>
        {resultStats}
      </div>

      <div className={styles.filters}>
        <button className="button">
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>All filters</span>
        </button>

        <div className="buttons has-addons">
          <button className="button" onClick={(e) => setPrice("1")} value="1">
            $
          </button>
          <button className="button" onClick={(e) => setPrice("2")} value="2">
            $$
          </button>
          <button className="button" onClick={(e) => setPrice("3")} value="3">
            $$$
          </button>
          <button className="button" onClick={(e) => setPrice("4")} value="4">
            $$$$
          </button>
        </div>

        <button className="button" onClick={submitFilter}>
          <span className="icon">
            <i className="fas fa-check"></i>
          </span>
          <span>Submit filter</span>
        </button>

        {/* <button className='button'>
                    <span className='icon'><i className='fas fa-dollar-sign'></i></span>
                    <span>Cashback</span>
                </button> */}
      </div>
    </div>
  );
}
