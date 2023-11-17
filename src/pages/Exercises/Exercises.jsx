import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import NavBar from '../../components/NavBar/NavBar';
import RightLine from '../../components/Icons/RightLine';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Exercises = () => {
  return (
    <>
      <SecondaryHeader title={'Ejercicios'} subtitle={'Lista de ejercicios'} />
      <main>
        <List>
          <ListItem>
            <Image src='/src/assets/Respiration.svg' alt='' />
            <Paragraph>Ejercicios de respiración</Paragraph>
            <Link to='/exercises/respiration'>
              <RightLine width={30} height={30} />
            </Link>
          </ListItem>

          <ListItem>
            <Image src='/src/assets/Motivation.svg' alt='' />
            <Paragraph>Ejercicios de motivación</Paragraph>
            <Link to='/exercises/motivation'>
              <RightLine width={30} height={30} />
            </Link>
          </ListItem>

          <ListItem>
            <Image src='/src/assets/Relax.svg' alt='' />
            <Paragraph>Música relajante</Paragraph>
            <Link to='/exercises/music'>
              <RightLine width={30} height={30} />
            </Link>
          </ListItem>
        </List>
      </main>
      <NavBar />
    </>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid #0000000d;
  background-color: rgba(181, 226, 226, 0.2);
  width: 350px;
  height: 120px;
  flex-shrink: 0;
  padding: 0 16px;
  margin: 16px;
`;

const Image = styled.img`
  width: 87px;
  height: 87px;
`;

const Paragraph = styled.p`
  color: rgba(25, 25, 25, 0.95);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export default Exercises;
