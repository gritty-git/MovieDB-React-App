import React from "react";

import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ movieExitHandler }) => {
  return <div className={classes.backdrop} onClick={movieExitHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      <Backdrop movieExitHandler={props.movieExitHandler} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
