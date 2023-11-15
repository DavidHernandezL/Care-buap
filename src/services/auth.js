import axios from './axios';

export const loginUserRequest = async (user) => axios.post('/auth/login', user);

export const verifyUserTokenRequest = async () => axios.get('/auth/verify');
