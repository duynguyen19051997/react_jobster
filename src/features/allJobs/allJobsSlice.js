import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk, showStatsThunk } from "./allJobsThunk";

const initialFilters = {
  search: "",
  searchStatus: "all",
  searchStatusOptions: ["all", "interview", "declined", "pending"],
  searchType: "all",
  searchTypeOptions: ["all", "full-time", "part-time", "remote", "internship"],
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialAllJobs = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilters,
};

export const showStats = createAsyncThunk(
  "allJobs/showStats",
  async (_, thunkAPI) => {
    return showStatsThunk("/jobs/stats", thunkAPI);
  }
);

export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    return getAllJobsThunk("/jobs", thunkAPI);
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState: initialAllJobs,
  reducers: {
    changeFilterHandle: (state, { payload: { name, value } }) => {
      state[name] = value;
      state.page = 1;
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    clearFilters: (state) => {
      return { ...initialAllJobs };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      const { jobs, numOfPages, totalJobs } = payload;
      state.isLoading = false;
      state.jobs = jobs;
      state.numOfPages = numOfPages;
      state.totalJobs = totalJobs;
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [showStats.pending]: (state) => {
      state.isLoading = true;
    },
    [showStats.fulfilled]: (state, { payload }) => {
      const { defaultStats, monthlyApplications } = payload;
      state.isLoading = false;
      state.stats = defaultStats;
      state.monthlyApplications = monthlyApplications;
    },
    [showStats.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  changeFilterHandle,
  showLoading,
  hideLoading,
  clearFilters,
  changePage,
} = allJobsSlice.actions;

export default allJobsSlice.reducer;
