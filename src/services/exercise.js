import axios from './axios';

export const getExercisesRequest = async (limit) =>
  await axios.get('/exercises', { params: { limit } });
