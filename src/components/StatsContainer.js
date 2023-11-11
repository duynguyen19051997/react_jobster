import React from "react";
import classes from "../assets/css/StatsContainer.module.css";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaBug } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { StatItem } from "./StatItem";

export const StatsContainer = () => {
  const { isLoading, stats } = useSelector((store) => store.allJobs);

  const arrStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <BiSolidShoppingBags className={classes["size"]} />,
      border_class: "pending_border",
      color_header_class: "pending_color",
      bg_icon_class: "pending_bg",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <BsFillCalendarCheckFill className={classes["size"]} />,
      border_class: "interview_border",
      color_header_class: "interview_color",
      bg_icon_class: "interview_bg",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug className={classes["size"]} />,
      border_class: "declined_border",
      color_header_class: "declined_color",
      bg_icon_class: "declined_bg",
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={classes["stats_container"]}>
      {arrStats.map((item, index) => (
        <StatItem key={index} {...item} />
      ))}
    </section>
  );
};
