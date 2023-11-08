import axios from "./axios";

export const registerRequest = (user) => axios.post("/auth/signup", user);

export const loginRequest = (user) => axios.post("/auth/login", user);

export const sessionRequest = () => axios.post("/auth/session");

export const logoutRequest = () => axios.get("/auth/logout");

export const recoveryRequest = (email) =>
  axios.post("/auth//recover-password", email);

export const resetRequest = (password) =>
  axios.post("/auth/reset-password", password);
