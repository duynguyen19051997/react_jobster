import { BiBarChartAlt } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBuildingAdd } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";

import classes from "../assets/css/SidebarMenu.module.css";

export const links = [
  {
    id: 1,
    text: "Stats",
    path: "/",
    icon: <BiBarChartAlt className={classes["icon_menu"]} />,
  },
  {
    id: 2,
    text: "All jobs",
    path: "/all-jobs",
    icon: <AiOutlineFileSearch className={classes["icon_menu"]} />,
  },
  {
    id: 3,
    text: "Add job",
    path: "/add-job",
    icon: <BsBuildingAdd className={classes["icon_menu"]} />,
  },
  {
    id: 4,
    text: "Profile",
    path: "/profile",
    icon: <RiProfileLine className={classes["icon_menu"]} />,
  },
];
