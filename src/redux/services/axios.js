/** @format */

import axios from "axios";
// для сокращениея запросов axios
const instance = axios.create({
  baseURL: "https://b11e-37-99-47-159.ngrok-free.app",
});
// middleware для проверки авторизации
instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    window.localStorage.getItem("token");

  return config;
});

export default instance;
