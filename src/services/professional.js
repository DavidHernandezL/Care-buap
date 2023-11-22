import axios from './axios';

export const getProfessionalsRequest = async (limit) =>
  await axios.get('/professionals', { params: { limit } });

export const getProfessionalRequest = async (id) =>
  await axios.get(`/professionals/${id}`);

export const createProfessionalRequest = async (data) =>
  await axios.post('/professionals', data);

export const updateProfessionalRequest = async (id, data) =>
  await axios.put(`/professionals/${id}`, data);

export const deleteProfessionalRequest = async (id) =>
  await axios.delete(`/professionals/${id}`);
