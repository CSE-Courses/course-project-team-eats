import React, { useState } from "react";
import styles from "./SearchResultsSummary.module.css";

export function SearchResultsSummary(props) {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);

  function handleButtonState(btn) {
    if (btn === "1") {
      setButton1(true);
      setButton2(false);
      setButton3(false);
      setButton4(false);
    } else if (btn === "2") {
      setButton2(true);
      setButton1(false);
      setButton3(false);
      setButton4(false);
    } else if (btn === "3") {
      setButton3(true);
      setButton2(false);
      setButton1(false);
      setButton4(false);
    } else if (btn === "4") {
      setButton4(true);
      setButton1(false);
      setButton2(false);
      setButton3(false);
    } else {
      return;
    }
  }

  function switchOff(e) {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
  }

  function handlePrice(priceParam) {
    props.searchWithFilter(props.term, props.location, priceParam);
  }

  function clearFilter(e) {
    if (typeof props.search === "function") {
      props.search(props.term, props.location);
    }
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

  var btn_class1 = button1 ? "is-success" : "";
  var btn_class2 = button2 ? "is-success" : "";
  var btn_class3 = button3 ? "is-success" : "";
  var btn_class4 = button4 ? "is-success" : "";

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
          <button
            className={`button ${btn_class1} `}
            onClick={(e) => {
              handlePrice("1");
              handleButtonState("1");
            }}
            value="1"
          >
            $
          </button>
          <button
            className={`button ${btn_class2} `}
            onClick={(e) => {
              handlePrice("2");
              handleButtonState("2");
            }}
            value="2"
          >
            $$
          </button>
          <button
            className={`button ${btn_class3} `}
            onClick={(e) => {
              handlePrice("3");
              handleButtonState("3");
            }}
            value="3"
          >
            $$$
          </button>
          <button
            className={`button ${btn_class4} `}
            onClick={(e) => {
              handlePrice("4");
              handleButtonState("4");
            }}
            value="4"
          >
            $$$$
          </button>
        </div>

        {/* <button className="button" onClick={submitFilter}>
          <span className="icon">
            <i className="fas fa-check"></i>
          </span>
          <span>Apply filter</span>
        </button> */}

        <button
          className="button"
          onClick={(e) => {
            clearFilter(e);
            switchOff(e);
          }}
        >
          <span className="icon">
            <i className="fas fa-minus-circle"></i>
          </span>
          <span>Clear filter</span>
        </button>
      </div>
    </div>
  );
}
