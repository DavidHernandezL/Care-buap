import React from "react";
import styled from "styled-components";
import LeftArrow from "@components/Icons/LeftArrow";
import { useNavigate } from "react-router-dom";

const MainHeader = ({ title, subtitle, hasIcon }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header>
        <Aside>
          {hasIcon && (
            <LeftArrow
              {...{ width: 55, height: 55, color: "#FFF" }}
              onClick={handleBack}
            />
          )}
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Aside>
        <picture>
          <source
            srcSet="/src/assets/logo.svg"
            type="image/svg+xml"
            media="(min-width: 600px)"
            width={250}
            height={250}
          />
          <img src="/src/assets/logo.svg" alt="Logo" width={150} height={150} />
        </picture>
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

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default MainHeader;
