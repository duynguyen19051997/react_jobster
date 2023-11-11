import customFetch from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";
import { authHeader } from "../../utils/authHeader";

export const createJobThunk = async (url, job, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, job, authHeader(thunkAPI));
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized? Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateJobThunk = async (url, job, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.patch(url, job, authHeader(thunkAPI));
    thunkAPI.dispatch(hideLoading());
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized? Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const removeJobThunk = async (url, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(url, authHeader(thunkAPI));
    thunkAPI.dispatch(getAllJobs());
    thunkAPI.dispatch(hideLoading());
    return resp.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized? Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
