import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import NavBar from '../../components/NavBar/NavBar';
import MedicalList from '../../components/MedicalList';
import styled from 'styled-components';
import doctors from '../../data/doctors.json';
const Professionals = () => {
  const { psychologist, psychiatrists, neurologists } = doctors;
  return (
    <>
      <SecondaryHeader title='Profesionales' />
      <DoctorsTypesList>
        <li>
          <Title>Psicólogos</Title>
          <MedicalList professionals={psychologist} />
        </li>
        <li>
          <Title>Psiquiatras</Title>
          <MedicalList professionals={psychiatrists} />
        </li>
        <li>
          <Title>Neurólogos</Title>
          <MedicalList professionals={neurologists} />
        </li>
      </DoctorsTypesList>
      <NavBar />
    </>
  );
};

const DoctorsTypesList = styled.ul`
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 30px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(25, 25, 25, 0.5);
  margin: 1rem;
  text-align: center;
`;

export default Professionals;
