import React from "react";
import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faMagnifyingGlass} />;

export default function SearchBar({ onInputChange }) {
  return (
    <div className={classes.searchbar}>
      {element}
      <input
        placeholder="Search for a movie"
        className={classes.searchinput}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
    </div>
  );
}
