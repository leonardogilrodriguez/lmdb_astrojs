import { useState } from "react";
import styles from "./styles.module.css";

const Searcher = () => {
  const [searchText, setSearchText] = useState("");

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = searchText.split(" ").join("+");
    window.location.href = `/results/${query}`;
  };

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className={styles.container} id="searcher">
        <div className={styles.formWrapper}>
          <button className={styles.logo} onClick={goHome}>
            {"LMDB"}
          </button>
          <form id="searcher__input-container" onSubmit={handleSubmit}>
            <label htmlFor="mainSearch" className={styles.visuallyHidden}>
              + Search +{" "}
            </label>
            <input
              id="mainSearch"
              type="text"
              onChange={onChange}
              placeholder={"Search..."}
              value={searchText}
            ></input>
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searcher;
