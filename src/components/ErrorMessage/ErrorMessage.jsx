import React from 'react';
import styled from 'styled-components';
import Warning from '../Icons/Warning';

const ErrorMessage = ({ children }) => {
  return (
    <>
      <Message role='img' aria-label='emoji'>
        <Warning width={20} height={20} /> {children}
      </Message>
    </>
  );
};

const Message = styled.span`
  color: #ff844f;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid red;
  padding: 0.5rem 0.8rem;
  background-color: #ffd2c296;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-radius: 1rem;
  height: 2rem;
  width: 325px;
  height: 45px;
`;

export default ErrorMessage;
