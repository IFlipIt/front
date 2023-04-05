import axios from "axios";

export const api = axios.create({
  baseURL: "https://erp-sales.onrender.com",
});
