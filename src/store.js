import { configureStore } from "@reduxjs/toolkit";

import useSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
import allJobsSlice from "./features/allJobs/allJobsSlice";
import modalSlice from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    user: useSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
    modal: modalSlice,
  },
});
