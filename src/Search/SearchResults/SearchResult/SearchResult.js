import React, { useState } from "react";
import { BusinessRating } from "../../../BusinessRating/BusinessRating";
import styles from "./SearchResult.module.css";
//import $ from "jquery";

const initialList = [
  {
    id: "1",
    name: "Nothing",
  },
];

//This is the part where a global function is declared.

// function GlobalList (props) {
//     const [listData, setListData] = useState({ list: initialList });
//     const [name, setName] = useState("");

//     function handleAdd() {
//       const newList = listData.list.concat({
//         id: props.business.id,
//         name: props.business.name,
//       });
//       setListData({ ...listData, list: newList });
//       setName("");
//     }

//     function handleDelete() {
//       setListData({ list: initialList });
//       setName("");
//     }

//     console.log(name);
//     console.log(listData);
// }

export function SearchResult(props) {
  // const [restaurant, setRestaurant] = useState([]);
  const [listData, setListData] = useState({ list: initialList });
  const [name, setName] = useState("");
  if (!props.business) {
    return <div> Error! Not Found</div>;
  }

  // function handleClick(e) {
  //   $(".image-checkbox").each(function () {
  //     if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
  //       $(this).addClass("image-checkbox-checked");
  //     } else {
  //       $(this).removeClass("image-checkbox-checked");
  //     }
  //   });

  //   // sync the state to the input
  //   $(".image-checkbox").on("click", function (e) {
  //     $(this).toggleClass("image-checkbox-checked");
  //     var $checkbox = $(this).find('input[type="checkbox"]');
  //     $checkbox.prop("checked", !$checkbox.prop("checked"));

  //     e.preventDefault();
  //   });
  //   console.log("Clicked");
  //}

  function handleAdd() {
    const newList = listData.list.concat({
      id: props.business.id,
      name: props.business.name,
    });
    setListData({ ...listData, list: newList });
    setName("");
  }

  function handleDelete() {
    setListData({ list: initialList });
    setName("");
  }

  console.log(name);
  console.log(listData);

  const postData = async () => {
    const restaurant = { listData: name };
    const response = await fetch("/add_restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });

    if (response.ok) {
      console.log("POST request works");
      console.log(response);
    }
  };

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
          if (e.target.checked) {
            handleAdd();
            postData();
          } else {
            handleDelete();
          }
        }}
        value={props.business.name}
      >
        <img
          src={props.business.image_url}
          alt="business"
          className={`${styles["business-image"]}`}
        />
        <input type="checkbox" name="image[]" value="" />
        {/* <i className={`fa fa-check`}></i> */}
      </label>

      <div className={styles["business-info"]}>
        <h2 className="subtitle">
          <strong>{props.business.name}</strong>
        </h2>
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
