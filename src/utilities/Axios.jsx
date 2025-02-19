import axios from "axios";
import getAuth from "./AuthHeader";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export default instance;
