import React from "react";
import classes from "../assets/css/Search.module.css";
import { FormRow } from "./FormRow";
import { FormRowSelect } from "./FormRowSelect";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFilterHandle,
  clearFilters,
  getAllJobs,
} from "../features/allJobs/allJobsSlice";

export const Search = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const changeHandle = (e) => {
    if (isLoading) {
      return;
    }
    const name = e.target.name;
    const value = e.target.value;
    dispatch(changeFilterHandle({ name, value }));
    dispatch(getAllJobs());
  };

  const submitHandle = (e) => {
    e.preventDefault();
  };

  const clearHandle = (e) => {
    dispatch(clearFilters());
    dispatch(getAllJobs());
  };

  return (
    <section className={classes["search_container"]}>
      <h2>Search</h2>
      <form className={classes["form_container"]} onSubmit={submitHandle}>
        <FormRow
          name="search"
          type="text"
          labelText="search"
          value={search}
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="searchStatus"
          options={statusOptions}
          selectedValue={searchStatus}
          labelText="status"
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="searchType"
          options={jobTypeOptions}
          selectedValue={searchType}
          labelText="type"
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="sort"
          options={sortOptions}
          selectedValue={sort}
          labelText="sort"
          onChangeHandle={changeHandle}
        />
        <div className={classes["action_container"]}>
          <button
            className={`btn ${classes["btn_clear"]}`}
            type="reset"
            onClick={clearHandle}
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </section>
  );
};
