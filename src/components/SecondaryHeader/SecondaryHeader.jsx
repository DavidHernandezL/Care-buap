import React from "react";
import styled from "styled-components";
import LeftArrow from "@components/Icons/LeftArrow";
import Exit from "@components/Icons/Exit";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const SecondaryHeader = ({ title, subtitle, hasIcon }) => {
  const { signOut } = useAuth();
  return (
    <>
      <Header>
        <picture>
          <source
            srcSet="/src/assets/logo_letra.svg"
            type="image/svg+xml"
            media="(min-width: 600px)"
            width={150}
            height={150}
          />
          <img
            src="/src/assets/logo_letra.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </picture>
        <Title>{title}</Title>
        <StyledLink onClick={() => signOut()} to="/">
          <Exit width={50} height={50} color={"#FFF"} />
          <Subtitle>Salir</Subtitle>
        </StyledLink>
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--primaryColor);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--white);
`;

const Subtitle = styled.h2`
  font-size: clamp(1.1rem, 4vw, 1.7rem);
  font-weight: 400;
  color: var(--white);
`;

const Logo = styled.img`
  margin: 0;
`;

export default SecondaryHeader;
