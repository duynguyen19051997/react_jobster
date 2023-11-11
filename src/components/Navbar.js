import React, { useState } from "react";
import classes from "../assets/css/Navbar.module.css";
import { BsList } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
import { clearStore, logoutUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const Navbar = ({ onShowSidebar }) => {
  const { user } = useSelector((store) => store.user);
  const [isShowLogout, setIsShowLogout] = useState(false);
  const dispatch = useDispatch();

  const dropdownClassName = isShowLogout
    ? `${classes["dropdown_content"]} ${classes["show_dropdown_content"]}`
    : `${classes["dropdown_content"]}`;

  return (
    <nav className={classes["navbar_container"]}>
      <BsList className={classes["icon"]} onClick={onShowSidebar} />
      <h1>dashboard</h1>
      <div className={classes["dropdown"]}>
        <button
          className={`btn ${classes["btn_logout"]}`}
          onClick={() => setIsShowLogout(!isShowLogout)}
        >
          {user?.name} <BiLogOutCircle />
        </button>
        <div className={dropdownClassName}>
          <button
            className="btn"
            onClick={() => {
              dispatch(clearStore("Logging out..."));
              setIsShowLogout(!isShowLogout);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
