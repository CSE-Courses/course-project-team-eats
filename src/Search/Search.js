import React from "react";
import { NavBar } from "../NavBar/NavBar";
//import styles from "./Search.module.css";
import { SearchResultsSummary } from "./SearchResultsSummary/SearchResultsSummary";
import { SearchResults } from "./SearchResults/SearchResults";
import useReactRouter from "use-react-router";
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";
import { Pagination } from "./Pagination/Pagination";

export function Search() {
  const { location, history } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const priceParam = params.get("price");
  const radiusParam = params.get("radius");
  const offsetParam = params.get("offset");
  const [
    businesses,
    amountResults,
    searchParams,
    performSearch,
  ] = useBusinessSearch(
    term,
    locationParam,
    priceParam,
    radiusParam,
    offsetParam
  );

  // const all_restaurants = [
  //   "Anchor Bar",
  //   "Duffs",
  //   "Chinese Cookery",
  //   "Deep South Taco",
  //   "Blue Bull Tavern",

  //   "Sato Ramen",
  //   "Allen Burger Venture",
  //   "Taisho Bistro",
  //   "Jasmines",
  //   "NY Beer Project",

  //   "Duffs",
  //   "NY Beer Project",
  //   "Sato Ramen",
  //   "Anchor Bar",
  //   "Deep South Taco",

  //   "Jasmines",
  //   "Sato Ramen",
  //   "Blue Bull Tavern",
  //   "Deep South Taco",
  //   "Chinese Cookery",
  // ];

  // var master_list = {};

  // var users = [];

  // var num_users = all_restaurants.length / 5;

  // function createUserLists() {
  //   var x;

  //   for (x = 0; x < num_users; x++) {
  //     var name = "user" + x;

  //     name = [];

  //     users.push(name);
  //   }
  // }

  // function createMasterList() {
  //   var x;

  //   for (x = 0; x < all_restaurants.length; x++) {
  //     if (master_list[all_restaurants[x]] !== true) {
  //       master_list[all_restaurants[x]] = 0;
  //     }
  //   }
  // }

  // function updateUsers() {
  //   var x;
  //   var y;
  //   var counter = 1;

  //   for (x = 0; x < num_users; x++) {
  //     for (y = 0; y < all_restaurants.length; y++) {
  //       if ((counter - 1) % 5 !== 0 || counter === 1) {
  //         users[x].push(all_restaurants[counter - 1]);
  //         counter++;
  //       } else {
  //         users[x + 1].push(all_restaurants[counter - 1]);
  //         x++;
  //         counter++;
  //       }
  //     }
  //   }

  //   ranking(users);
  // }

  // function ranking(users) {
  //   var x;
  //   var y;

  //   for (x = 0; x < num_users; x++) {
  //     for (y = 0; y < users[x].length; y++) {
  //       if (y === 0) {
  //         first(users[x][y]);
  //       } else if (y === 1) {
  //         second(users[x][y]);
  //       } else if (y === 2) {
  //         third(users[x][y]);
  //       } else if (y === 3) {
  //         fourth(users[x][y]);
  //       } else if (y === 4) {
  //         fifth(users[x][y]);
  //       }
  //     }
  //   }

  //   console.log(master_list);

  //   getWinner(master_list);
  // }

  // function first(restaurant) {
  //   master_list[restaurant] += 5;
  // }

  // function second(restaurant) {
  //   master_list[restaurant] += 4;
  // }

  // function third(restaurant) {
  //   master_list[restaurant] += 3;
  // }

  // function fourth(restaurant) {
  //   master_list[restaurant] += 2;
  // }

  // function fifth(restaurant) {
  //   master_list[restaurant] += 1;
  // }

  // function getWinner(master_list) {
  //   var x;
  //   // var y;
  //   var currWinner = master_list[Object.keys(master_list)[0]];
  //   var winner = Object.keys(master_list)[0];

  //   for (x = 0; x < Object.keys(master_list).length; x++) {
  //     if (master_list[Object.keys(master_list)[x]] > currWinner) {
  //       currWinner = master_list[Object.keys(master_list)[x]];
  //       winner = Object.keys(master_list)[x];
  //     }
  //   }

  //   console.log("Winner:" + winner);
  // }

  // function main() {
  //   createUserLists();
  //   createMasterList();
  //   updateUsers();
  // }

  // main();

  if (!term || !locationParam) {
    history.push("/landing");
  }

  function search(term, location) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`
    );
    performSearch({ term, location });
  }

  function searchWithFilter(term, location, price) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(locationParam);
    const encodedPrice = price;

    history.push(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}&price=${encodedPrice}`
    );
    performSearch({ term, location, price });
  }

  function searchWithRadiusFilter(term, location, radius) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(locationParam);
    const encodedRadius = radius;

    history.push(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}&radius=${encodedRadius}`
    );
    performSearch({ term, location, radius });
  }

  function nextPage(term, location, offset) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(locationParam);
    const encodedOffset = offset;

    history.push(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}&offset=${encodedOffset}`
    );
    performSearch({ term, location, offset });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //TODO: function to submit data to the DB
  }

  return (
    <div>
      <NavBar term={term} location={locationParam} search={search} />
      {/* <SubNav /> */}
      <SearchResultsSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        shownResults={businesses ? businesses.length : 0}
        searchWithFilter={searchWithFilter}
        searchWithRadiusFilter={searchWithRadiusFilter}
        search={search}
        handleSubmit={handleSubmit}
      />

      <SearchResults businesses={businesses} handleSubmit={handleSubmit} />
      <Pagination
        nextPage={nextPage}
        search={search}
        term={searchParams.term}
        location={searchParams.location}
      />
    </div>
  );
}
