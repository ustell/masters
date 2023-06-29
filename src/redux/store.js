/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/authSlice";
import orderReducer from "./features/orderSlice";

const store = configureStore({
  reducer: { user: userReducer, order: orderReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export default store;
