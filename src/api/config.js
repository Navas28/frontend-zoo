import axios from "axios";

// Using Vite's environment variable system
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://backend-zoo.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default api;
export { API_BASE_URL };
