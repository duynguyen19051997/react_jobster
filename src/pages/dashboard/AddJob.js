import React, { useEffect } from "react";
import { FormRow, FormRowSelect } from "../../components/index";
import classes from "../../assets/css/AddJob.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/index";
import { toast } from "react-toastify";
import {
  createJob,
  changeHandle,
  clearValues,
  updateJob,
} from "../../features/job/jobSlice";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { showStats } from "../../features/allJobs/allJobsSlice";

export const AddJob = (props) => {
  const {
    isLoading,
    company,
    position,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!company || !position || !jobLocation) {
      toast.warning("Please, fill out all the fields");
      return;
    }

    if (isEditing) {
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
    } else {
      dispatch(createJob({ company, position, jobLocation, jobType, status }));
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(changeHandle({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        changeHandle({
          name: "jobLocation",
          value: getUserFromLocalStorage().jobLocation,
        })
      );
    }
  }, [isEditing, dispatch]);

  return (
    <section className={classes["add_job_container"]}>
      <h2>{isEditing ? "Edit job" : "Add job"}</h2>
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
            <button className={`btn ${classes["btn_submit"]}`} type="submit">
              submit
            </button>
            <button
              className={`btn ${classes["btn_clear"]}`}
              type="reset"
              onClick={() => {
                dispatch(clearValues());
              }}
            >
              clear
            </button>
          </div>
        )}
        {isLoading && <Loading />}
      </form>
    </section>
  );
};
