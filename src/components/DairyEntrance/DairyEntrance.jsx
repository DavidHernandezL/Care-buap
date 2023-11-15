import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DairyEntrance = ({ title, date, mood, uid }) => {
  const moods = {
    regular: 'Indiferente',
    happy: 'Feliz',
    sad: 'Triste',
  };
  return (
    <Li>
      <LinkStyled to={`/journals/${uid}`}>ver</LinkStyled>
      <Header>
        <Title>{title}</Title>
        <Span>
          <img src={`/src/assets/${mood}.svg`} alt={mood} />
          {moods[mood]}
        </Span>
      </Header>
      <Date>{date}</Date>
    </Li>
  );
};

const Li = styled.li`
  border: 1px solid #000000ac;
  width: clamp(300px, 80%, 600px);
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #00b5e2;
  font-size: 1.5rem;
`;

const Title = styled.h2`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-weight: 600;
  line-height: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
`;

const Span = styled.span`
  display: flex;
  align-content: center;
  gap: 5px;
  color: rgba(25, 25, 25, 0.6);
  font-size: 1.2rem;
`;

const Date = styled.h3`
  color: rgba(25, 25, 25, 0.7);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default DairyEntrance;
