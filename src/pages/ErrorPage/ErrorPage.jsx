import React from 'react';
import styled from 'styled-components';

const ErrorPageWrapper = styled.div`
  background-color: #003b5c;
  color: #00b5e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const ErrorDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  background-color: #00b5e2;
  color: #003b5c;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <ErrorTitle>Error 404</ErrorTitle>
      <ErrorDescription>La página que buscas no existe.</ErrorDescription>
      <BackButton onClick={() => window.history.back()}>
        Volver a la página principal
      </BackButton>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
