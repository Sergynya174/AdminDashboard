import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import userSlice from "./user";
import purchaseSlice from "./purchase";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  purchase: purchaseSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
