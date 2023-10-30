import React from "react";
import styled from "styled-components";

const ButtonPrimary = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};

const Button = styled.button`
  display: block;
  width: 320px;
  padding: 0.5rem;
  border: 1px solid var(--secondaryColor);
  background-color: var(--secondaryColor);
  border-radius: 1rem;
  font-size: 1.2rem;
  color: var(--white);

  &:hover {
    color: var(--primaryColor);
    background-color: var(--hoverSecondaryColor);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--secondaryColor);
  }
`;

export default ButtonPrimary;
