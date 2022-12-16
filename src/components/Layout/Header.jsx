import React from "react";
import SearchBar from "../UI/SearchBar";
import classes from "./Header.module.css";
import bannerImage from "./../../assets/banner.png";

export default function Header({ onInputChange }) {
  return (
    <>
      <header className={classes.header}>
        <img src={bannerImage} className={classes.banner} />
        <SearchBar onInputChange={onInputChange} />
      </header>
    </>
  );
}
