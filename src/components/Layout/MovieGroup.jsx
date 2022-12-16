import React, { useState } from "react";
import MovieCard from "../UI/MovieCard";
import classes from "./MovieGroup.module.css";

export default function MovieGroup({ movies, title, movieClickHandler }) {
  return (
    <>
      {movies.length > 0 && <h3>{title}</h3>}
      {movies.length > 0 && (
        <div className={classes.moviegrid}>
          {movies.length &&
            movies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.id}
                movieClickHandler={movieClickHandler}
              />
            ))}
        </div>
      )}
    </>
  );
}
