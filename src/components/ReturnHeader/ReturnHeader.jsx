import React from 'react';
import styled from 'styled-components';
import LeftArrow from '@components/Icons/LeftArrow';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ReturnHeader = ({ title }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Header>
        <LeftArrow
          {...{
            width: 55,
            height: 55,
            color: '#FFF',
            flex: 0.2,
            cursor: 'pointer',
          }}
          onClick={handleBack}
        />
        <Title>{title}</Title>
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--primaryColor);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  flex: 1;
  text-align: center;
  font-weight: 600;
  color: var(--white);
`;

export default ReturnHeader;
