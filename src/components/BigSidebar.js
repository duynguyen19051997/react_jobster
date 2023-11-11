import React from "react";
import classes from "../assets/css/BigSidebar.module.css";
import { Logo } from "./Logo";
import { SidebarMenu } from "./index";

export const BigSidebar = () => {
  return (
    <aside className={classes["big_aside_container"]}>
      <div style={{ padding: "1rem" }}>
        <Logo />
      </div>
      <SidebarMenu />
    </aside>
  );
};
