import React from "react";
import styled from "styled-components";
import Camera from "../Icons/Camera";
import { useFormContext } from "react-hook-form";
const ImgInput = ({ name, src }) => {
  const { register } = useFormContext();
  return (
    <Upload>
      <img src={src || "/unknownImage.png"} alt="Preview" />
      <Round>
        <input type="file" name={name} {...register(name)} />
        <Camera />
      </Round>
    </Upload>
  );
};

const Upload = styled.div`
  width: 100px;
  position: relative;
  margin: auto;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 6px solid #eaeaea;
    object-fit: cover;
  }
`;

const Round = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #00b4ff;
  width: 32px;
  height: 32px;
  line-height: 33px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;

  input {
    position: absolute;
    transform: scale(2);
    opacity: 0;
  }
`;

export default ImgInput;
