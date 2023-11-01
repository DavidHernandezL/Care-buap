import React from "react";
import Heart from "../Icons/Heart";
import HeartBeat from "../Icons/HeartBeat";
import Message from "../Icons/Message";
import Contact from "../Icons/Contact";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
const NavBar = () => {
  return (
    <>
      <Nav>
        <ListLinks>
          <ListItems>
            <LinkItem>
              <Heart style={{ fontSize: "1.8rem", lineHeight: "2rem" }} />
              <Label>Profile</Label>
            </LinkItem>
          </ListItems>
          <ListItems>
            <LinkItem href="/exercises">
              <HeartBeat style={{ fontSize: "1.8rem", lineHeight: "2rem" }} />
              <Label>Exercises</Label>
            </LinkItem>
          </ListItems>
          <ListItems>
            <LinkItem href="/diary">
              <Message style={{ fontSize: "1.8rem", lineHeight: "2rem" }} />
              <Label>Diary</Label>
            </LinkItem>
          </ListItems>
          <ListLinks>
            <LinkItem href="/professionals">
              <Contact style={{ fontSize: "1.8rem", lineHeight: "2rem" }} />
              <Label>Professional</Label>
            </LinkItem>
          </ListLinks>
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
  width: 4rem;
`;

const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Label = styled.span`
  font-size: 1rem;
  line-height: 1rem;
  color: #66717a;
  font-weight: 600;
  margin-top: 0.5rem;
`;

export default NavBar;
