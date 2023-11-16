import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MedicalCard from '../MedicalCard/MedicalCard';

const MedicalList = ({ professionals }) => {
  return (
    <List style={{ listStyle: 'none' }}>
      {professionals.map((professional) => {
        return (
          <li key={professional.id}>
            <Link to={`/Professionals/${professional.type}/${professional.id}`}>
              <MedicalCard professional={professional} />
            </Link>
          </li>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default MedicalList;
