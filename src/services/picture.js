import axios from 'axios';

export const getAvatar = async (name) =>
  axios.get(`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${name}`);
