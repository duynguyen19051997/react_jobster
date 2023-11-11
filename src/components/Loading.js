import React from "react";
import classes from "../assets/css/Loading.module.css";

export const Loading = () => {
  return (
    <div className={classes["loading_container"]}>
      <span className={classes["loader"]}></span>
    </div>
  );
};
