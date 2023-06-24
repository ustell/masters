/** @format */

// authSlice.js

import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../services/axios";

export const fetchUserName = createAsyncThunk(
  "auth/fetchUserName",
  async ({ token }) => {
    if (token) {
      try {
        const response = await axios.get("/client/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response;
      } catch (error) {
        console.error("Failed to fetch user name:", error);
        throw error;
      }
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userToken: null,
    userName: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userName = action.payload;
      })
      .addCase(fetchUserName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUserToken } = authSlice.actions;

export default authSlice.reducer;
