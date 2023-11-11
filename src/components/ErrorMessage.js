import React from "react";
import classes from "../assets/css/Error.module.css";
import notfound from "../assets/images/notfound.svg";
import { Link } from "react-router-dom";

export const ErrorMessage = (props) => {
  return (
    <div className={classes["error_container"]}>
      <img src={notfound} alt="Not found" />
      <h2>Ohh! Page Not Found</h2>
      <p>{props.message}</p>
      <Link to="/" className={`btn ${classes["btn_error"]}`}>
        Back to home
      </Link>
    </div>
  );
};
