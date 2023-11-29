import axios from './axios';

export const getChatById = id => {
	return axios.get(`/chats/${id}`);
};

export const createChat = data => {
	return axios.post('/chats', { nameChat: data });
};

export const addMessage = (id, data) => {
	return axios.post(`/chats/${id}`, { messages: data });
};

export const botMessage = (id, data) => {
	return axios.post(`/chats/${id}/messages`, { message: data, bot: true });
};
