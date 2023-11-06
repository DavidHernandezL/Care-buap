import React from "react";
import SecondaryHeader from "../../components/SecondaryHeader";
import NavBar from "../../components/NavBar/NavBar";
import MedicalList from "../../components/MedicalList";
import styled from "styled-components";

const Professionals = () => {
  return (
    <>
      <SecondaryHeader title="Profesionales" />
      <DoctorsTypesList>
        <li>
          <Title>Medicos Generales</Title>
          <MedicalList />
        </li>
        <li>
          <Title>Psicólogos</Title>
          <MedicalList />
        </li>
        <li>
          <Title>Psiquiatras</Title>
          <MedicalList />
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(25, 25, 25, 0.5);
  margin: 1rem;
`;

export default Professionals;
