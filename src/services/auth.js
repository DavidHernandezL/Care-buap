import axios from "./axios";

export const registerRequest = (user) => axios.post("/auth/signup", user);

export const loginRequest = (user) => axios.post("/auth/login", user);

export const sessionRequest = () => axios.post("/auth/session");
