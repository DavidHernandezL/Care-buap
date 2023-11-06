import React from "react";
import SecondaryHeader from "../../components/SecondaryHeader";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DairyEntrance from "../../components/DairyEntrance";

const Dairy = () => {
  return (
    <>
      <SecondaryHeader title="Diario" />
      <Main>
        <NotesSection>
          <List>
            <DairyEntrance title="Nota 1" date="17/10/2023" mood="regular" />
            <DairyEntrance
              title="Mis primeras vacaciones"
              date="17/10/2023"
              mood="happy"
            />
            <DairyEntrance title="Nota 1" date="17/10/2023" mood="sad" />
          </List>
        </NotesSection>
        <LinkStyled to="/diary/entry">¡Quiero escribir algo nuevo!</LinkStyled>
      </Main>
      <NavBar />
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const NotesSection = styled.section`
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  align-self: center;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  background-color: #003b5c;
  font-size: 1.5rem;
  color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
`;
export default Dairy;
