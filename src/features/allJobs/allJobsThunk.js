import { authHeader } from "../../utils/authHeader";
import customFetch from "../../utils/axios";
import { logoutUser } from "../user/userSlice";

export const getAllJobsThunk = async (url, thunkAPI) => {
  try {
    const { search, searchStatus, searchType, sort, page } =
      thunkAPI.getState().allJobs;
    url += `?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized? Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const showStatsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    //console.log(resp.data);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized? Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
