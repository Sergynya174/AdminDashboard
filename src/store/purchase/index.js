import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

export const purchases = createAsyncThunk("purchases", async () => {
  const { data } = await axiosInstance.get("payments/");
  return data;
});

export const purchase = createAsyncThunk("purchase", async (payments_id) => {
  const { data } = await axiosInstance.get(`payments/${payments_id}/`);
  return data;
});

const initialState = {
  purchase: null,
  purchases: null,
  loaders: {
    common: false,
  },
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  extraReducers: (builder) => {
    //user
    builder.addCase(purchase.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(purchase.fulfilled, (state, { payload }) => {
      state.purchase = payload;
      state.loaders.common = false;
    });
    builder.addCase(purchase.rejected, (state, action) => {
      state.loaders.common = false;
      state.errors = action.payload;
    });
    //users
    builder.addCase(purchases.pending, (state) => {
      state.loaders.common = true;
    });
    builder.addCase(purchases.fulfilled, (state, { payload }) => {
      state.purchases = payload;
      state.loaders.common = false;
    });
    builder.addCase(purchases.rejected, (state, action) => {
      state.loaders.common = false;
    });
  },
});

export default purchaseSlice.reducer;
