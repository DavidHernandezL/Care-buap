import axios from './axios';

export const getJournalRequest = () => axios.get('/journals');

export const getJournalByIdRequest = (id) => axios.get(`/journals/${id}`);

export const createJournalRequest = (data) => axios.post('/journals', data);

export const updateJournalRequest = (id, data) => axios.put(`/journals/${id}`, data);
