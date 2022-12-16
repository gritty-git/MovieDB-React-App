import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "../UI/Modal";
import { IMAGE_BASE_URL } from "../../config";

import classes from "./MovieDetail.module.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MovieDetail = (props) => {
  console.log(props);
  const modalActions = (
    <div className={classes.actions}>
      <h3 style={{ marginTop: "0em", marginBottom: "0.8em" }}>
        {props.movie.title}
      </h3>
      <button
        className={classes["button--alt"]}
        onClick={props.movieExitHandler}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
  const release_date = new Date(props.movie.release_date);
  console.log(release_date);
  const ModalDetail = (
    <div className={classes.ModalDetail}>
      <img
        className={classes.poster_image}
        src={IMAGE_BASE_URL + props.movie.poster_path}
        alt="new"
      />
      <div className={classes.modaltext}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "32px",
          }}
        >
          <h4 style={{ margin: "0" }}>Release Date:&ensp; </h4>
          <text>
            {" " +
              monthNames[release_date.getMonth()] +
              " " +
              release_date.getDate() +
              ", " +
              release_date.getFullYear()}
          </text>
        </div>
        <text>{props.movie.overview}</text>
        <br />
        <br />
        <text>
          <strong>{props.movie.vote_average}</strong>/10 (
          {props.movie.vote_count} total votes)
        </text>
      </div>
    </div>
  );

  const ModalContent = (
    <div className={classes.ModalContent}>
      {modalActions}
      {ModalDetail}
    </div>
  );

  return (
    <Modal movieExitHandler={props.movieExitHandler}>{ModalContent}</Modal>
  );
};

export default MovieDetail;
