import axios from './axios';

export const registerUserRequest = async (user) => axios.post('/users', user);
