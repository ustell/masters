/** @format */

import axios from "axios";
// для сокращениея запросов axios
const instance = axios.create({
  baseURL: "http://localhost:4000",
});
// middleware для проверки авторизации
instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    window.localStorage.getItem("token");

  return config;
});

export default instance;
