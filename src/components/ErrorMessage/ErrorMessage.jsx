import React from "react";
import styled from "styled-components";
import Warning from "../Icons/Warning";

const ErrorMessage = ({ children }) => {
  return (
    <>
      <Message role="img" aria-label="emoji">
        <Warning width={20} height={20} /> {children}
      </Message>
    </>
  );
};

const Message = styled.span`
  color: #ff844f;
  font-weight: 700;
  font-size: 0.9rem;
  border: 1px solid red;
  padding: 0.5rem;
  background-color: #ffd2c2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  height: 2rem;
  margin-bottom: 1rem;
`;

export default ErrorMessage;
