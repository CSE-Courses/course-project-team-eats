import { API_BASE_URL, BEARER_TOKEN } from "./config";
//import axios from "axios";
import queryString from "query-string";

export function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  return fetch(`${API_BASE_URL}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: true,
    },
  });

  // return axios.create(`${API_BASE_URL}${path}?${query}`, {
  //   headers: {
  //     Authorization: `Bearer ${BEARER_TOKEN}`,
  //     Origin: "localhost",
  //     withCredentials: true,
  //   },
  // });
}
