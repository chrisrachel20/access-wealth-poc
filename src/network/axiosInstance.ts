import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://casestudy-api-1.accesswealth.io/",
  timeout: 270000,
});

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
