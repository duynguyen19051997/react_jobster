import React from "react";
import classes from "../assets/css/Modal.module.css";

export const Modal = ({ isShow, onClose, children }) => {
  const modalClassName = isShow
    ? classes["modal_container"]
    : `${classes["modal_container"]} ${classes["modal_none"]}`;

  return (
    <div className={modalClassName}>
      <section className={classes["modal_main"]}>
        <button className={`btn ${classes["btn_close"]}`} onClick={onClose}>
          X
        </button>
        {children}
      </section>
    </div>
  );
};
