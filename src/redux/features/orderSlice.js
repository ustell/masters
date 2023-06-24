/** @format */

// authSlice.js

import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../services/axios";

export const fetchOrder = createAsyncThunk(
  "categories/find",
  async (title) => {
    if (title) {
      try {
        const response = await axios.get(
          `/categories/${title.content}`,
        );

        return response;
      } catch (error) {
        console.error("Ошибка получения категории", error);
        throw error;
      }
    }
  },
);

export const fetchCreateOrder = createAsyncThunk(
  "post/create",
  async ( params ) => {
    console.log(params);
    const { data } = await axios.post(
      "/post/create",
      params,
    );
    return data;
  },
);
const orderSlice = createSlice({
  name: "order",
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userName = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
  serializableCheck: false,
});

export default orderSlice.reducer;
