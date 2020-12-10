import React from "react";
import styles from "./SearchSuggestions.module.css";

export function SearchSuggestions(props) {
  // Step 1: Get user coordinates
  function getCoordinates() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;
      var lat = crd.latitude.toString();
      var lng = crd.longitude.toString();
      var coordinates = [lat, lng];
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      var currentLocation = getCity(coordinates);
      return currentLocation;
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  // Step 2: Get city name
  function getCity(coordinates) {
    var xhr = new XMLHttpRequest();
    var lat = coordinates[0];
    var lng = coordinates[1];

    // Paste your LocationIQ token below.
    xhr.open(
      "GET",
      "https://us1.locationiq.com/v1/reverse.php?key=pk.b24de00592d24dc3d0d995524118904a&lat=" +
        lat +
        "&lon=" +
        lng +
        "&format=json",
      true
    );
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var city = response.address.city;
        console.log(city);
        return city;
      }
    }
  }

  getCoordinates();

  function searchDelivery() {
    const term = "Delivery";
    //const location = getCoordinates();

    props.search(term, location);
  }

  function searchNightlife() {
    const term = "Nightlife";
//      getCoordinates();
//     const location = getCoordinates();

    props.search(term, location);
  }

  function searchRestaurants() {
    const term = "Restaurants";
    // getCoordinates();
//     const location = getCoordinates();

    props.search(term, location);
  }

  function searchServices() {
    const term = "Services";
    // getCoordinates();
//     const location = getCoordinates();

    props.search(term, location);
  }

  return (
    <div className={styles.suggestions}>
      <span className="icon is-small">
        <i className="fas fa-utensils"></i>
      </span>
      <span className={styles.suggestion} onClick={() => {
          var location = "Buffalo";
          searchRestaurants(location);
        }}>
        Restaurants
      </span>

      <span className="icon is-small">
        <i className="fas fa-cocktail"></i>
      </span>
      <span className={styles.suggestion} onClick={() => var location = "Buffalo";
          searchNightlife(location);
        }}>
        Nightlife
      </span>

      <span className="icon is-small">
        <i className="fas fa-concierge-bell"></i>
      </span>
      <span className={styles.suggestion} onClick={() => var location = "Buffalo";
          searchServices(location);
        }}>
        Services
      </span>

      <span className="icon is-small">
        <i className="fas fa-truck"></i>
      </span>
      <span className={styles.suggestion} onClick={() => var location = "Buffalo";
          searchDelivery(location);
        }}>
        Delivery Services
      </span>
    </div>
  );
}
