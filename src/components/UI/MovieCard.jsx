import React from "react";
import classes from "./MovieCard.module.css";
import { IMAGE_BASE_URL } from "../../config";

export default function MovieCard({ movie, movieClickHandler }) {
  return (
    <div
      className={classes.moviecard}
      onClick={() => {
        movieClickHandler(movie);
      }}
    >
      <img
        className={classes.poster_image}
        src={IMAGE_BASE_URL + movie.poster_path}
        alt="new"
      />
      <div className={classes.circleBase}>{movie.vote_average}</div>
      <text className={classes.titleText}>{movie.title}</text>
    </div>
  );
}
