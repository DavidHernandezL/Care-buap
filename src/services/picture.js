import axios from 'axios';

export const getAvatar = async (name) =>
  axios.get(`https://ui-avatars.com/api/?name=${name}&background=ramdon&color=fff`);
