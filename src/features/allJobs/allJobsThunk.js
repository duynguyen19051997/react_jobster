import { authHeader } from "../../utils/authHeader";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

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
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    //console.log(resp.data);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
