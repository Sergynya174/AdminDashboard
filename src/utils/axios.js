import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token !== null) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export { axiosInstance };
