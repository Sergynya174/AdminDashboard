import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=UTF-8",
    Referer: "http://localhost:3000/",
  },
});

export { axiosInstance };
