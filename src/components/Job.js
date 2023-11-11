import React from "react";
import classes from "../assets/css/Job.module.css";
import { ImCompass } from "react-icons/im";
import { BsCalendar3 } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { removeJob, setEditJob } from "../features/job/jobSlice";
import { Confirm } from "./index";
import { closeModal, openModal } from "../features/modal/modalSlice";
import { Link } from "react-router-dom";

export const Job = ({
  _id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {
  const createdAtDate = moment(createdAt).format("MMM Do YY");
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  const removeHandle = (e) => {
    dispatch(openModal());
  };

  return (
    <article className={classes["job_container"]}>
      <div className={classes["job_title"]}>
        <div className={classes["job_title_icon"]}>
          <span>{company.charAt(0)}</span>
        </div>
        <div className={classes["job_title_info"]}>
          <h3>{position}</h3>
          <p>{company}</p>
        </div>
      </div>
      <div className={classes["job_detail"]}>
        <div className={classes["job_detail_attr"]}>
          <ImCompass className={classes["icon"]} />
          <p>{jobLocation}</p>
        </div>
        <div className={classes["job_detail_attr"]}>
          <BsCalendar3 className={classes["icon"]} />
          <p>{createdAtDate}</p>
        </div>
        <div className={classes["job_detail_attr"]}>
          <IoBagCheckOutline className={classes["icon"]} />
          <p>{jobType}</p>
        </div>
        <div
          className={`${classes["job_detail_attr_status"]} ${classes[status]}`}
        >
          <p>{status}</p>
        </div>
      </div>
      <div className={classes["job_actions"]}>
        <Link
          to={`/add-job`}
          className={`btn ${classes["edit_btn"]}`}
          onClick={() => {
            dispatch(
              setEditJob({
                company,
                position,
                status,
                jobType,
                jobLocation,
                editJobId: _id,
              })
            );
          }}
        >
          Edit
        </Link>
        <button
          className={`btn ${classes["remove_btn"]}`}
          onClick={removeHandle}
        >
          Remove
        </button>
        <Confirm
          isShow={isOpen}
          onClose={() => {
            dispatch(closeModal());
          }}
          onConfirm={() => {
            dispatch(removeJob(_id));
            dispatch(closeModal());
          }}
          message="Do you want to remove this job?"
        />
        {/* TODO: Edit popup */}
      </div>
    </article>
  );
};
