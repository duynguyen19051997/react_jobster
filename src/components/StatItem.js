import React from "react";
import classes from "../assets/css/StatItem.module.css";

export const StatItem = ({
  title,
  count,
  icon,
  border_class,
  color_header_class,
  bg_icon_class,
}) => {
  return (
    <article className={`${classes["stats_item"]} ${classes[border_class]}`}>
      <header className={classes[color_header_class]}>
        <span className={classes["count"]}>{count}</span>
        <span className={`${classes["icon"]} ${classes[bg_icon_class]}`}>
          {icon}
        </span>
      </header>
      <h3>{title}</h3>
    </article>
  );
};
