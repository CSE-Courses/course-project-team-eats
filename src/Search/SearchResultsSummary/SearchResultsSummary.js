import React, { useState } from "react";
import styles from "./SearchResultsSummary.module.css";

export function SearchResultsSummary(props) {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [slider, setSlider] = useState({ value: 0 });
  //const [counter, setCounter] = useState(0);

  function handleButtonState(btn) {
    if (btn === "1") {
      setButton1(true);
      setButton2(false);
      setButton3(false);
      setButton4(false);
      setSlider({ value: 0 });
    } else if (btn === "2") {
      setButton2(true);
      setButton1(false);
      setButton3(false);
      setButton4(false);
      setSlider({ value: 0 });
    } else if (btn === "3") {
      setButton3(true);
      setButton2(false);
      setButton1(false);
      setButton4(false);
      setSlider({ value: 0 });
    } else if (btn === "4") {
      setButton4(true);
      setButton1(false);
      setButton2(false);
      setButton3(false);
      setSlider({ value: 0 });
    } else {
      return;
    }
  }

  function switchOff(e) {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setSlider({ value: 0 });
  }

  function handleDropdown(e) {
    if (!dropDown) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }

  function handleSlider(e) {
    setSlider({ value: e.target.value });
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    props.searchWithRadiusFilter(
      props.term,
      props.location,
      slider.value * 1600
    );
    console.log(slider.value);
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

  var i = 0;

  var dropDown_class = dropDown ? "is-active" : "";
  //var submit_class = counter === 0 ? "" : "is-disabled";

  return (
    <div className={styles.container}>
      <div className={styles["search-summary"]}>
        <h1 className="subtitle">
          <strong>{props.term}</strong> {props.location}
          {/* <p className="paragraph">User 1: Choose your top 5 restaurants</p> */}
        </h1>
        <h1 className={styles["heading"]}>Choose your top 5 restaurants</h1>
        {resultStats}
      </div>

      <div className={styles.filters}>
        {/* <button className="button">
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>All filters</span>
        </button> */}
        <div className={`dropdown ${dropDown_class}`}>
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu3"
              onClick={(e) => {
                handleDropdown(e);
              }}
            >
              <span className="icon">
                <i className="fas fa-sliders-h"></i>
              </span>
              <span>Filters</span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu3" role="menu">
            <div className="dropdown-content">
              <div className="slider-content">
                <div className={`text-heading ${styles["text-heading"]}`}>
                  Filter by miles
                </div>
                <input
                  className={`slider is-fullwidth is-success is-circle ${styles["slider"]}`}
                  step="1"
                  min="0"
                  max="25"
                  value={slider.value}
                  type="range"
                  onChange={(e) => {
                    handleSlider(e);
                  }}
                ></input>
                <output for="sliderWithValue">{slider.value}</output>
              </div>
            </div>
          </div>
        </div>

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
          <span>Clear filters</span>
        </button>

        <button
          className={`button is-info  ${styles["nextUser-button"]}`}
          onClick={(e) => {
            props.search(props.term, props.location);
          }}
        >
          <span>Next User</span>
          <span className="icon">
            <i className="fas fa-chevron-right"></i>
          </span>
        </button>
        <button
          className={`button is-warning ${styles["submit-button"]}`}
          title="Disabled button"
          onClick={(e) => {
            console.log("Submit button works");
            window.open(
              "https://ancient-hollows-62522.herokuapp.com",
              "_blank"
            );
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
