import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.SERVER,
  withCredentials: true,
});

export default axiosInstance;
