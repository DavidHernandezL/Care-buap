import React from 'react';
import styled from 'styled-components';
import Exit from '@components/Icons/Exit';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SecondaryHeader = ({ title }) => {
  const { logout } = useAuth();
  return (
    <>
      <Header>
        <picture>
          <source
            srcSet='/assets/logo_letra.svg'
            type='image/svg+xml'
            media='(min-width: 600px)'
            width={110}
            height={110}
          />
          <img src='/assets/logo_letra.svg' alt='Logo' width={90} height={90} />
        </picture>
        <Title>{title}</Title>
        <StyledLink onClick={() => logout()} to='/'>
          <Exit width={40} height={40} color={'#FFF'} />
          <Subtitle>Salir</Subtitle>
        </StyledLink>
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
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
  font-size: clamp(1.2rem, 5vw, 2rem);
  font-weight: 700;
  color: var(--white);
`;

const Subtitle = styled.h2`
  font-size: clamp(1rem, 4vw, 1.6rem);
  font-weight: 400;
  color: var(--white);
`;

const Logo = styled.img`
  margin: 0;
`;

export default SecondaryHeader;
