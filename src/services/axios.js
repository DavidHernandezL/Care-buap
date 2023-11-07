import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.107:8080/api/v1/",
  withCredentials: true,
});

export default instance;
