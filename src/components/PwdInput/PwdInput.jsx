import React, { useState } from "react";
import EyeOff from "@components/Icons/EyeOff";
import Eye from "@components/Icons/Eye";

import styled from "styled-components";

const PwdInput = ({ name, label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Container>
        <Label htmlFor={name}>{label}</Label>
        {showPassword ? (
          <EyeStyled
            onClick={() => setShowPassword(!showPassword)}
            width={25}
            height={25}
          />
        ) : (
          <EyeOffStyled
            onClick={() => setShowPassword(!showPassword)}
            width={25}
            height={25}
          />
        )}
        <InputStyled
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          {...props}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--secondaryColor);
  position: absolute;
  top: -1rem;
  left: 1rem;
  background-color: var(--white);
`;

const InputStyled = styled.input`
  display: block;
  width: clamp(320px, 100%, 600px);
  padding: 0.5rem;
  border: 1px solid var(--secondaryColor);
  background-color: var(--white);
  border-radius: 1rem;
  font-size: 1.2rem;
  &::placeholder {
    color: var(--textGray);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--secondaryColor);
  }
`;

const EyeOffStyled = styled(EyeOff)`
  position: absolute;
  top: 0.4rem;
  right: 1rem;
  color: var(--textGray);
`;

const EyeStyled = styled(Eye)`
  position: absolute;
  top: 0.4rem;
  right: 1rem;
  color: var(--textGray);
`;

export default PwdInput;
