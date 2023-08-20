import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

export const users = createAsyncThunk("users", async () => {
  const { data } = await axiosInstance.get("users/");
  return data;
});

export const user = createAsyncThunk("user", async (user_id) => {
  const { data } = await axiosInstance.get(`users/${user_id}/`);
  return data;
});

const initialState = {
  user: null,
  users: null,
  loaders: {
    common: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //user
    builder.addCase(user.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(user.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loaders.common = false;
    });
    builder.addCase(user.rejected, (state, action) => {
      state.loaders.common = false;
      state.errors = action.payload;
    });
    //users
    builder.addCase(users.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(users.fulfilled, (state, { payload }) => {
      state.users = payload;
    });
    builder.addCase(users.rejected, (state, action) => {
      state.loaders.common = false;
    });
  },
});

export const { preSubmitSingUp } = userSlice.actions;
export default userSlice.reducer;
