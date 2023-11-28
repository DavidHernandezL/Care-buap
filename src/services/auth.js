import axios from './axios';

export const loginUserRequest = async user => axios.post('/auth/login', user);

export const verifyUserTokenRequest = async () => axios.get('/auth/verify');

export const recoverPasswordRequest = async email =>
	axios.post('/auth/recovery-password', email);

export const resetPasswordRequest = async (id, token, data) =>
	axios.post(`/auth/reset-password/${id}/${token}`, data);

export const changePasswordRequest = async data =>
	axios.post(`/auth/change-password`, data);
