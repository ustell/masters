/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://b11e-37-99-47-159.ngrok-free.app",
  mode: "no-cors", // Add the 'no-cors' mode here
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    window.localStorage.getItem("token");

  return config;
});

export default instance;
