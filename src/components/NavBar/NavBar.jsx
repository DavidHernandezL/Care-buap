import React from 'react';
import Heart from '../Icons/Heart';
import HeartBeat from '../Icons/HeartBeat';
import Message from '../Icons/Message';
import Contact from '../Icons/Contact';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { useHref } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
const NavBar = () => {
  const { user } = useAuth();
  return (
    <>
      <Nav>
        <ListLinks>
          <ListItems>
            <LinkItem to={'/profile'}>
              <Heart style={{ fontSize: '1.8rem', lineHeight: '2rem' }} />
              <Label>Perfil</Label>
            </LinkItem>
          </ListItems>
          <ListItems>
            <LinkItem to={'/exercises'}>
              <HeartBeat style={{ fontSize: '1.8rem', lineHeight: '2rem' }} />
              <Label>Ejercicios</Label>
            </LinkItem>
          </ListItems>
          <ListItems>
            <LinkItem to='/diary'>
              <Message style={{ fontSize: '1.8rem', lineHeight: '2rem' }} />
              <Label>Diario</Label>
            </LinkItem>
          </ListItems>
          <ListItems>
            <LinkItem to='/professionals'>
              <Contact style={{ fontSize: '1.8rem', lineHeight: '2rem' }} />
              <Label>Profesional</Label>
            </LinkItem>
          </ListItems>

          {user.role === 'ADMIN_ROLE' && (
            <ListItems>
              <LinkItem to='/dashboard'>
                <Contact style={{ fontSize: '1.8rem', lineHeight: '2rem' }} />
                <Label>Administrar</Label>
              </LinkItem>
            </ListItems>
          )}
        </ListLinks>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  background-color: #fff;
  max-height: 4.4rem;
  padding: 0 1.5rem;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const ListLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
`;

const ListItems = styled.li`
  padding: 0.8rem 0;

  @media screen and (max-width: 768px) {
    svg {
      width: 1.2rem;
      height: 1.3rem;
    }
  }
`;

const LinkItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Label = styled.span`
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 0.65rem;
    line-height: 0.65rem;
  }
`;

export default NavBar;
