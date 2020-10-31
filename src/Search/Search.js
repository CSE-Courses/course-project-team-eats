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
  const [
    businesses,
    amountResults,
    searchParams,
    performSearch,
  ] = useBusinessSearch(term, locationParam, priceParam);

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
      />
      <SearchResults businesses={businesses} />
      <Pagination />
    </div>
  );
}
