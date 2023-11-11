import React from "react";
import classes from "../assets/css/Landing.module.css";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components/index";

export const Landing = (props) => {
  return (
    <main className={classes["main_container"]}>
      <nav>
        <Logo />
      </nav>
      <div className={classes["main_center"]}>
        <div className={classes["main_contents"]}>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to="/register" className={`btn ${classes["btn_login"]}`}>
            Login/Register
          </Link>
        </div>
        <div className={classes["main_images"]}>
          <img src={main} alt="main" />
        </div>
      </div>
    </main>
  );
};
