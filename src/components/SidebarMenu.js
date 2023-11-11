import React from "react";
import classes from "../assets/css/SidebarMenu.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { links } from "../utils/links";

export const SidebarMenu = ({ isSmallSidebar = false, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <ul className={classes["menu"]}>
      {links &&
        links.map((x) => (
          <li
            key={x.id}
            onClick={() => {
              navigate(x.path);
              isSmallSidebar && onClose();
            }}
            className={`${location === x.path ? `${classes["active"]}` : ""}`}
          >
            {x.icon} {x.text}
          </li>
        ))}
    </ul>
  );
};
