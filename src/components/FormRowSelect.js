import React from "react";
import classes from "../assets/css/FormRowSelect.module.css";

export const FormRowSelect = ({
  name,
  options,
  selectedValue,
  labelText,
  onChangeHandle,
}) => {
  return (
    <div className={classes["form_control"]}>
      <label htmlFor={name}>{labelText}</label>
      <select
        id={name}
        name={name}
        onChange={onChangeHandle}
        value={selectedValue}
      >
        {options &&
          options.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
      </select>
    </div>
  );
};
