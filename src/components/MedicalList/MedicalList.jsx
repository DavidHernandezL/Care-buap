import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MedicalList = () => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li>
        <LinkStyled>
          <img src='/no-image.png' alt='Foto de perfil' />
          <h2>Dr. Juan Perez</h2>
        </LinkStyled>
      </li>
      <li>
        <LinkStyled>
          <img src='/no-image.png' alt='Foto de perfil' />
          <h2>Dra. Natalia </h2>
        </LinkStyled>
      </li>
    </ul>
  );
};

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(25, 25, 25, 0.9);
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export default MedicalList;
