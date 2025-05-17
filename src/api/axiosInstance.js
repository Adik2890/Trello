import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://49d88a0507d35c8b.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
