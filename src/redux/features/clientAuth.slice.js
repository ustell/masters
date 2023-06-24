/** @format */

import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../services/axios";

const initialState = {
  data: null,
  status: "loading",
};

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async () => {
    const { data } = await axios.get("/auth/me");
    return data;
  },
);

export const fetchRegister = createAsyncThunk(
  "client/register",
  async (telephone) => {
    const { data } = await axios.post(
      "/client/register",
      telephone,
    );
    return data;
  },
);

export const fetchVerify = createAsyncThunk(
  "auth/fetchLogin",
  async (params) => {
    console.log(params);
    const { data } = await axios.post(
      "/client/authenticate",
      params,
    );
    return data;
  },
);
export const fetchUpdate = createAsyncThunk(
  "auth/update",
  async (params) => {
    console.log(params);
    const data = await axios.put("/client/update", params);
    return data;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    // login
    [fetchVerify.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    // загрузилось
    [fetchVerify.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    // fetchVerify загрузки
    [fetchVerify.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    // update

    [fetchUpdate.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    // загрузилось
    [fetchUpdate.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    // fetchVerify загрузки
    [fetchUpdate.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },

    [fetchLogin.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    // загрузилось
    [fetchLogin.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    // ошибка загрузки
    [fetchLogin.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    // register
    [fetchRegister.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    // загрузилось
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    // ошибка загрузки
    [fetchRegister.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
  serializableCheck: false,
});

export const isAuthSelector = () =>
  Boolean(localStorage.getItem("token"));

export const authClientReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
