/** @format */
import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ telephone, name, email }, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://648840560e2469c038fd560a.mockapi.io/DataCategory",
        {
          telephone,
          name,
          email,
          orders: [],
        },
      );
      return response.data; // Return the data if registration is successful
    } catch (error) {
      console.error(
        "Ошибка при регистрации пользователя:",
        error,
      );
      throw error; // Throw the error if registration fails
    }
  },
);
export const fetchUpdatedUserName = createAsyncThunk(
  "user/fetchUpdatedUserName",
  async (telephone, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://648840560e2469c038fd560a.mockapi.io/DataCategory/?telephone=${telephone}`,
      );

      const userData = response.data[0]; // Предполагается, что ответ представляет собой массив, поэтому обращаемся к первому элементу

      return userData; // Возвращаем обновленный объект пользователя
    } catch (error) {
      console.error(
        "Ошибка при получении обновленного имени пользователя:",
        error,
      );
      throw error; // Выбрасываем ошибку, если запрос не удался
    }
  },
);
export const fetchUpdatedUser = createAsyncThunk(
  "user/fetchUpdatedUser",
  async ({
    telephone,
    title,
    minPrice,
    maxPrice,
    selectedOption,
    option,
  }) => {
    try {
      const response = await axios.get(
        `https://648840560e2469c038fd560a.mockapi.io/DataCategory/?telephone=${telephone}`,
      );

      const userData = response.data[0]; // Предполагается, что ответ представляет собой массив, поэтому обращаемся к первому элементу

      const updatedUserData = {
        ...userData,
        orders: [
          ...userData.orders,
          {
            title,
            minPrice,
            maxPrice,
            selectedOption,
            option,
          },
        ],
      };

      // Отправляем обновленный объект пользователя на сервер
      await axios.put(
        `https://648840560e2469c038fd560a.mockapi.io/DataCategory/${userData.id}`,
        updatedUserData,
      );

      return updatedUserData; // Возвращаем обновленный объект пользователя
    } catch (error) {
      console.error(
        "Ошибка при получении обновленного имени пользователя:",
        error,
      );
      throw error; // Выбрасываем ошибку, если запрос не удался
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    date: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
      // Handle any further actions or state updates after successful registration
    });
    builder.addCase(
      registerUser.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    );
    //
    builder.addCase(
      fetchUpdatedUserName.pending,
      (state) => {
        state.loading = true;
        state.error = null;
      },
    );
    builder.addCase(
      fetchUpdatedUserName.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload; // Присваиваем полученный объект пользователя переменной state.data
      },
    );
    builder.addCase(
      fetchUpdatedUserName.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    );
    //
    builder.addCase(fetchUpdatedUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchUpdatedUser.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload; // Присваиваем полученный объект пользователя переменной state.data
      },
    );
    builder.addCase(
      fetchUpdatedUser.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    );
  },
});

export default userSlice.reducer;
