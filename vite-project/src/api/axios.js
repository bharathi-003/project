import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // future backend
});

export default api;
