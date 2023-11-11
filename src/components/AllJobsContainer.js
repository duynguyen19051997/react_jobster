import React, { useEffect } from "react";
import { Search } from "./Search";
import classes from "../assets/css/AllJobsContainer.module.css";
import { Job } from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { Loading, PageBtnContainer } from "./index";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

export const AllJobsContainer = () => {
  const { jobs, isLoading, numOfPages } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  return (
    <section className={classes["all_jobs_container"]}>
      <Search />
      {isLoading && (
        <div className={classes["loading_container"]}>
          <Loading />
        </div>
      )}
      {!isLoading && jobs.length === 0 && <h4>No jobs to display</h4>}
      {!isLoading && jobs.length > 0 && (
        <>
          <div className={classes["all_jobs_number"]}>
            <h3>
              {jobs.length} job{jobs.length > 1 && "s"} found
            </h3>
          </div>
          <div className={classes["all_jobs_center"]}>
            {jobs.map((job, index) => (
              <Job key={index} {...job} />
            ))}
          </div>
          <div className={classes["all_jobs_paging"]}>
            {numOfPages > 0 && <PageBtnContainer />}
          </div>
        </>
      )}
    </section>
  );
};
