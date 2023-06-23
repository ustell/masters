/** @format */

// authSlice.js

import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserName = createAsyncThunk(
  "auth/fetchUserName",
  async (_, { getState }) => {
    const { userToken } = getState().auth;
    if (userToken) {
      try {
        const response = await axios.get("/api/user/name", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        const userName = response.data.name;
        return userName;
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
