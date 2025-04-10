import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Base URL from environment variable
  timeout: 30000, // Timeout in milliseconds
  headers: { "Content-Type": "application/json" },
});




console.log(import.meta.env.VITE_API_BASE_URL);

export default API;