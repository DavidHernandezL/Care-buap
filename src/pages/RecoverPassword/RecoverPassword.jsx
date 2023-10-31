import React from "react";
import MainHeader from "@components/MainHeader";
import styled from "styled-components";
import Input from "@components/Input";
import ButtonPrimary from "../../components/ButtonPrimary";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RecoverPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/auth/reset-password");
  };

  return (
    <>
      <MainHeader
        title={"Recuperar contraseña"}
        subtitle={"Ingrese sus credenciales"}
      />
      <Container>
        <form style={{ width: "100%" }}>
          <InputSection>
            <Input
              label="Correo Institucional"
              name={"email"}
              {...{ placeholder: "nombre@apulno.buap.mx", type: "email" }}
            />
            <ButtonPrimary type="submit" onClick={handleSubmit}>
              Enviar correo de recuperación
            </ButtonPrimary>
          </InputSection>
        </form>
      </Container>
    </>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
  align-items: center;
  height: calc(100vh - 300px);
`;

const LinkStyled = styled(Link)`
  color: #00b5e2;
`;

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 16px;
`;

export default RecoverPassword;
