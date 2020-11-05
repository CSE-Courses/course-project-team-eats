import React from "react";
import { NavBar } from "../NavBar/NavBar";
//import {SubNav} from '../NavBar/SubNav/SubNav';
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
  const [
    businesses,
    amountResults,
    searchParams,
    performSearch,
  ] = useBusinessSearch(term, locationParam, priceParam, radiusParam);

  if (!term || !locationParam) {
    history.push("/");
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

  function getPagesCount(total, denominator) {
    const divisible = total % denominator === 0;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
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
      />
      <SearchResults businesses={businesses} />
      <Pagination getPagesCount={getPagesCount} />
    </div>
  );
}
