import React from "react";
import classes from "../assets/css/FormRow.module.css";

export const FormRow = ({ name, type, value, labelText, onChangeHandle }) => {
  return (
    <div className={classes["form_control"]}>
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={value}
        className="input"
        onChange={onChangeHandle}
      />
    </div>
  );
};
