import React, { useState } from "react";
import { BusinessRating } from "../../../BusinessRating/BusinessRating";
import styles from "./SearchResult.module.css";
//import axios from 'axios';

const initialList = [
  {
    id: "",
    name: "",
  },
];

export function SearchResult(props) {
  // const [restaurant, setRestaurant] = useState([]);
  const [listData, setListData] = useState({ list: initialList });
  const [name, setName] = useState("");
  if (!props.business) {
    return <div> Error! Not Found</div>;
  }

  function handleAdd() {
    const newList = listData.list.concat({
      id: props.business.id,
      name: props.business.name,
    });
    setListData({ ...listData, list: newList });

    setName("");
  }

  function handleDelete(restaurantDeleted) {
    setListData({ list: initialList });
    setName("");
  }

  console.log(name);
  console.log(listData);

  const deleteData = async (restaurantDeleted) => {
    const restaurant = restaurantDeleted;
    console.log(restaurant);
    fetch("y-scrubland-97776.herokuapp.com/restaurants/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "text/html",
      },
      body: restaurant,
    })
      .then((response) => response.json())
      .catch((err) => console.log("Error" + err));
  };

  const postData = async (businessName) => {
    var restaurant = businessName;
    console.log(JSON.stringify(restaurant));
    await fetch(
      "https://ancient-hollows-62522.herokuapp.com/add_restaurant",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/html",
        },
        body: restaurant,
      }
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error("Error" + err));
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
            postData(props.business.name);
          } else {
            handleDelete(e.target.value);
            deleteData(props.business.name);
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
