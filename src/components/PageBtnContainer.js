import React from "react";
import classes from "../assets/css/PageBtnContainer.module.css";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changePage, getAllJobs } from "../features/allJobs/allJobsSlice";

export const PageBtnContainer = () => {
  const { page, numOfPages } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const arrPage = [];
  for (let i = 1; i <= numOfPages; i++) {
    arrPage.push(
      <button
        key={i}
        onClick={(e) => {
          dispatch(changePage(i));
          dispatch(getAllJobs());
        }}
        className={`btn ${classes["btn_page"]} ${
          page === i ? classes["page_active"] : null
        }`}
      >
        {i}
      </button>
    );
  }

  const changePageHandle = (type) => {
    if (type === "PREV") {
      if (page === 1) {
        return;
      }
      dispatch(changePage(page - 1));
      dispatch(getAllJobs());
      return;
    }
    if (type === "NEXT") {
      if (page === numOfPages) {
        return;
      }
      dispatch(changePage(page + 1));
      dispatch(getAllJobs());
      return;
    }
  };

  return (
    <div className={classes["page_container"]}>
      <button
        className={`btn ${classes["btn_page"]}`}
        disabled={page === 1}
        onClick={(e) => {
          changePageHandle("PREV");
        }}
      >
        <BsChevronDoubleLeft />
      </button>
      {arrPage}
      <button
        className={`btn ${classes["btn_page"]}`}
        disabled={page === numOfPages}
        onClick={(e) => {
          changePageHandle("NEXT");
        }}
      >
        <BsChevronDoubleRight />
      </button>
    </div>
  );
};
