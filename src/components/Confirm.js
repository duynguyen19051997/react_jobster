import React from "react";
import classes from "../assets/css/Confirm.module.css";

export const Confirm = ({ isShow, onClose, onConfirm, message }) => {
  const confirmClassName = isShow
    ? classes["confirm_container"]
    : `${classes["confirm_container"]} ${classes["confirm_none"]}`;

  return (
    <div className={confirmClassName}>
      <section className={classes["confirm_main"]}>
        <h4>{message}</h4>
        <div className={classes["actions_container"]}>
          <button
            type="button"
            className={`btn ${classes["btn_confirm"]}`}
            onClick={() => {
              onConfirm();
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className={`btn ${classes["btn_cancel"]}`}
            onClick={() => {
              onClose();
            }}
          >
            cancel
          </button>
        </div>
      </section>
    </div>
  );
};
