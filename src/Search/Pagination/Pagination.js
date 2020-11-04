import React from "react";
import styles from "./Pagination.module.css";

export function Pagination(props) {
  // this.state = {
  //   query: "",
  //   results: {},
  //   error: "",
  //   message: "",
  //   loading: false,
  //   totalResults: 0,
  //   totalPages: 0,
  //   currentPageNo: 0,
  // };

  // const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
  // const [error, setError] = useState("");
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [totalResults, setTotalResults] = useState(0);
  // const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className={styles["pagination"]}>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <div className="pagination-previous">Previous</div>
        <div className={`pagination-next ${styles["pagination-next"]}`}>
          Next page
        </div>
        <ul className="pagination-list">
          <li>
            <div
              className="pagination-link is-current"
              aria-label="Goto page 1"
            >
              1
            </div>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <div className="pagination-link" aria-label="Goto page 45">
              45
            </div>
          </li>
          <li>
            <div
              className="pagination-link"
              aria-label="Page 46"
              aria-current="page"
            >
              46
            </div>
          </li>
          <li>
            <div className="pagination-link" aria-label="Goto page 47">
              47
            </div>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <div className="pagination-link" aria-label="Goto page 86">
              86
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
