import axios from "../../services/axios";

export const upload = ({ file, userId: uid }) => {
  const formData = new FormData();
  console.log(file);
  formData.append("file", file[0]);
  console.log(formData);
  return axios.post(`/upload/${uid}`, formData);
};
