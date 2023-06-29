/** @format */

import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (categoryName) => {
    const response = await axios.get(
      "https://648840560e2469c038fd560a.mockapi.io/Orders",
    );
    const data = response.data;

    const categories = data.reduce((result, order) => {
      const category = order.category;

      if (category === categoryName) {
        result.push(order);
      }

      return result;
    }, []);

    return categories;
  },
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    error: null,
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      },
    );
    builder.addCase(
      fetchCategories.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    );
  },
});

export default categorySlice.reducer;
