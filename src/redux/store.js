/** @format */

import { configureStore } from "@reduxjs/toolkit";

import { authClientReducer } from "./features/clientAuth.slice";
import authReducer from "./features/authSlice";
import orderReducer from "./features/orderSlice";

const store = configureStore({
  reducer: {
    authClient: authClientReducer,
    auth: authReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware(),
});

export default store;
