import axios from "axios";
const API_URL = "http://localhost:8080/api/v1";

export const registerRequest = (user) =>
  axios.post(API_URL + "/auth/signup", user);

export const loginRequest = (user) => axios.post(API_URL + "/auth/login", user);
