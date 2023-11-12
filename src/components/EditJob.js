import React from "react";
import classes from "../assets/css/EditJob.module.css";
import { FormRow } from "./FormRow";
import { FormRowSelect } from "./FormRowSelect";
import { useDispatch, useSelector } from "react-redux";
import { changeHandle, clearValues, updateJob } from "../features/job/jobSlice";
import { toast } from "react-toastify";
import { Loading } from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

export const EditJob = ({ isShow, onClose }) => {
  const {
    isLoading,
    company,
    position,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!company || !position || !jobLocation) {
      toast.warning("Please, fill out all the fields");
      return;
    }

    dispatch(
      updateJob({
        company,
        position,
        jobLocation,
        jobType,
        status,
        editJobId,
      })
    );
    onClose();
    dispatch(getAllJobs());
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(changeHandle({ name, value }));
  };

  const editClassName = isShow
    ? classes["edit_job_container"]
    : `${classes["edit_job_container"]} ${classes["edit_job_none"]}`;

  return (
    <div className={editClassName}>
      <section className={classes["edit_job_main"]}>
        <div className={classes["header"]}>
          <h2>Edit job</h2>
          <button className={`btn ${classes["btn_close"]}`} onClick={onClose}>
            X
          </button>
        </div>
        <div className={classes["content"]}>
          <form className={classes["form_container"]} onSubmit={submitHandler}>
            <FormRow
              name="position"
              type="text"
              labelText="position"
              value={position}
              onChangeHandle={handleJobInput}
            />
            <FormRow
              name="company"
              type="text"
              labelText="company"
              value={company}
              onChangeHandle={handleJobInput}
            />
            <FormRow
              name="jobLocation"
              type="text"
              labelText="job location"
              value={jobLocation}
              onChangeHandle={handleJobInput}
            />
            <FormRowSelect
              name="status"
              options={statusOptions}
              selectedValue={status}
              labelText="status"
              onChangeHandle={handleJobInput}
            />
            <FormRowSelect
              name="jobType"
              options={jobTypeOptions}
              selectedValue={jobType}
              labelText="job type"
              onChangeHandle={handleJobInput}
            />
            {!isLoading && (
              <div className={classes["action_container"]}>
                <button
                  className={`btn ${classes["btn_submit"]}`}
                  type="submit"
                >
                  submit
                </button>
                <button
                  className={`btn ${classes["btn_clear"]}`}
                  type="reset"
                  onClick={() => {
                    dispatch(clearValues());
                    onClose();
                  }}
                >
                  clear
                </button>
              </div>
            )}
            {isLoading && <Loading />}
          </form>
        </div>
      </section>
    </div>
  );
};
