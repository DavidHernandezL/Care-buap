import axios from "./axios";
export const updateUserRequest = (user) => axios.put(`/user/${user.uid}`, user);
