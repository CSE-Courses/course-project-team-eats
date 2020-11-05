import React from "react";
import { BusinessRating } from "../../../BusinessRating/BusinessRating";
import styles from "./SearchResult.module.css";
import $ from "jquery";

export function SearchResult(props) {
  if (!props.business) {
    return <div> Error! Not Found</div>;
  }

  function handleClick(e) {
    $(".image-checkbox").each(function () {
      if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
        $(this).addClass("image-checkbox-checked");
      } else {
        $(this).removeClass("image-checkbox-checked");
      }
    });

    // sync the state to the input
    $(".image-checkbox").on("click", function (e) {
      $(this).toggleClass("image-checkbox-checked");
      var $checkbox = $(this).find('input[type="checkbox"]');
      $checkbox.prop("checked", !$checkbox.prop("checked"));

      e.preventDefault();
    });
    console.log("Clicked");
  }

  const tags = props.business.categories.map((category) => (
    <span
      className={`tag ${styles["business-tag"]}`}
      key={props.business.id + category.title}
    >
      {category.title}
    </span>
  ));
  const addressLines = props.business.location.display_address.map(
    (addressLine) => <p key={props.business.id + addressLine}>{addressLine}</p>
  );

  return (
    <div className={styles["search-result"]}>
      <label
        className={`image-checkbox`}
        onClick={(e) => {
          handleClick();
        }}
      >
        <img
          src={props.business.image_url}
          alt="business"
          className={`${styles["business-image"]}`}
        />
        <input type="checkbox" name="image[]" value="" />
        <i className={`fa fa-check`}></i>
      </label>

      <div className={styles["business-info"]}>
        <h2 className="subtitle">{props.business.name}</h2>
        <BusinessRating
          reviewCount={props.business.review_count}
          rating={props.business.rating}
        />
        <p>
          {" "}
          {props.business.price}
          {tags}
        </p>
      </div>
      <div className={styles["contact-info"]}>
        <p>{props.business.phone} </p>
        {addressLines}
      </div>
    </div>
  );
}
