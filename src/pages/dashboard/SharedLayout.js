import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/user/userSlice";

import classes from "../../assets/css/SharedLayout.module.css";
import {
  BigSidebar,
  Modal,
  Navbar,
  SmallSidebar,
} from "../../components/index";
import { getUserFromLocalStorage } from "../../utils/localStorage";

export const SharedLayout = (props) => {
  const { isShowSidebar } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [size, setSize] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUserFromLocalStorage()) {
      navigate("/register");
    }
  }, [navigate]);

  useEffect(() => {
    const resizeHandle = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandle);

    return (_) => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  return (
    <main className={classes["dashboard_container"]}>
      {isShowSidebar && (
        <div className={classes["sidebar_container"]}>
          <BigSidebar />
          {size <= 1100 && size > 0 && (
            <Modal
              isShow={isShowSidebar}
              onClose={() => dispatch(toggleSidebar())}
            >
              <SmallSidebar onClose={() => dispatch(toggleSidebar())} />
            </Modal>
          )}
        </div>
      )}
      <div className={classes["content_container"]}>
        <Navbar onShowSidebar={() => dispatch(toggleSidebar())} />
        <div className={classes["content"]}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
