import axios from './axios';

export const getExercisesRequest = async (limit) =>
  await axios.get('/exercises', { params: { limit } });

export const getExerciseRequest = async (id) => await axios.get(`/exercises/${id}`);

export const createExerciseRequest = async (data) => await axios.post('/exercises', data);

export const updateExerciseRequest = async (id, data) =>
  await axios.put(`/exercises/${id}`, data);

export const deleteExerciseRequest = async (id) => await axios.delete(`/exercises/${id}`);
