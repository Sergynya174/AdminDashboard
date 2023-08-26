import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

export const loginAdmin = createAsyncThunk("loginAdmin", async (params) => {
  const { data } = await axiosInstance.post("token/", params);
  return data;
});

export const loginUser = createAsyncThunk("loginUser", async (params) => {
  const { data } = await axiosInstance.post("token/", params);
  return data;
});

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  isUser: false,
  errors: null,
  email: null,
  loaders: {
    common: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deleteAuthenticated: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    //loginAdmin
    builder.addCase(loginAdmin.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, { payload }) => {
      const { email, access, refresh } = payload;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      state.user = { email };
      state.isAuthenticated = true;
      state.isAdmin = true;
      state.loaders.common = false;
    });
    builder.addCase(loginAdmin.rejected, (state) => {
      state.loaders.common = false;
      state.errors = "Error";
    });
    //loginUser
    builder.addCase(loginUser.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { email, access, refresh } = payload;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      state.user = { email };
      state.isUser = true;
      state.loaders.common = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loaders.common = false;
      state.errors = "Error";
    });
  },
});

export const { deleteAuthenticated } = authSlice.actions;
export default authSlice.reducer;
