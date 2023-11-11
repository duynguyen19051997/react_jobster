import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { ChartsContainer, StatsContainer } from "../../components/index";

export const Stats = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);

  return (
    <>
      <StatsContainer />
      <ChartsContainer />
    </>
  );
};
