import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    console.log("Request Start", config);
    return config;
  },
  function (error) {
    console.log("Request Error", error);

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("Response Get", response);

    return response;
  },
  function (error) {
    console.log("Response Error", error);

    return Promise.reject(error);
  }
);

export default api;
