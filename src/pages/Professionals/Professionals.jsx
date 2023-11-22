import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import NavBar from '../../components/NavBar/NavBar';
import MedicalList from '../../components/MedicalList';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

import { getProfessionalsRequest } from '../../services/professional';

const Professionals = () => {
  const [psychologist, setPsychologist] = useState([]);
  const [psychiatrists, setPsychiatrists] = useState([]);
  const [neurologists, setNeurologists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDoctors = async () => {
      const { data: res } = await getProfessionalsRequest();
      console.log(res.data);
      const psychologists = res.data.filter(
        (professional) => professional.type === 'psychologist'
      );
      const psychiatrists = res.data.filter(
        (professional) => professional.type === 'psychiatrists'
      );
      const neurologists = res.data.filter(
        (professional) => professional.type === 'neurologists'
      );
      setNeurologists(neurologists);
      setPsychiatrists(psychiatrists);
      setPsychologist(psychologists);
      setLoading(false);
    };

    getDoctors();
  }, []);

  return (
    <>
      <SecondaryHeader title='Profesionales' />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
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
      )}
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
