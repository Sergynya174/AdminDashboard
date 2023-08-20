import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import userSlice from "./user";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
