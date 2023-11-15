import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = ({ children, type, ...props }) => {
  return (
    <Button type={type} {...props}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  display: block;
  width: 325px;
  padding: 0.5rem;
  margin-top: 1rem;
  border: 1px solid var(--secondaryColor);
  background-color: #00b5e2cc;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: var(--white);

  &:hover {
    background-color: #109dc0;
  }

  &:focus {
    outline: none;
    border: 1px solid var(--secondaryColor);
  }
`;

export default ButtonPrimary;
