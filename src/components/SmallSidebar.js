import React from "react";
import classes from "../assets/css/SmallSidebar.module.css";
import { Logo } from "./Logo";
import { SidebarMenu } from "./SidebarMenu";

export const SmallSidebar = ({ onClose }) => {
  return (
    <aside className={classes["small_sidebar_container"]}>
      <div style={{ padding: "1rem" }}>
        <Logo />
      </div>
      <SidebarMenu isSmallSidebar={true} onClose={onClose} />
    </aside>
  );
};
