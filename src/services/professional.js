import axios from './axios';

export const getProfessionalsRequest = async (limit) =>
  await axios.get('/professionals', { params: { limit } });
