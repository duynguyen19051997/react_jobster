import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { createJobThunk, removeJobThunk, updateJobThunk } from "./jobThunk";

const initialJob = {
  isLoading: false,
  company: "",
  position: "",
  jobLocation: getUserFromLocalStorage()?.location || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    return createJobThunk("/jobs", job, thunkAPI);
  }
);

export const updateJob = createAsyncThunk(
  "job/updateJob",
  async (job, thunkAPI) => {
    const url = "/jobs/" + job.editJobId;
    return updateJobThunk(url, job, thunkAPI);
  }
);

export const removeJob = createAsyncThunk(
  "job/removeJob",
  async (jobId, thunkAPI) => {
    const url = "/jobs/" + jobId;
    return removeJobThunk(url, thunkAPI);
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState: initialJob,
  reducers: {
    changeHandle: (state, { payload: { name, value } }) => {
      return { ...state, [name]: value };
    },
    clearValues: (state) => {
      return { ...initialJob };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        toast.success("Add job successfully");
      } else {
        toast.error("Add job failure");
      }
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [removeJob.pending]: (state) => {},
    [removeJob.fulfilled]: (state, { payload }) => {
      if (payload) {
        toast.success("Remove job successfully");
      } else {
        toast.error("Remove job failure");
      }
    },
    [removeJob.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
    [updateJob.pending]: (state) => {
      state.isLoading = true;
    },
    [updateJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        toast.success("Update job successfully");
      } else {
        toast.error("Update job failure");
      }
    },
    [updateJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { changeHandle, clearValues, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
