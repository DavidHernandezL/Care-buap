import React from "react";
import MainHeader from "@components/MainHeader";
import styled from "styled-components";
import Input from "@components/Input";
import ButtonPrimary from "../../components/ButtonPrimary";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <MainHeader
        title={"Inicio de sesión"}
        subtitle={"Ingrese sus credenciales"}
      />
      <Container>
        <form style={{ width: "100%" }}>
          <InputSection>
            <Input
              label="Matricula"
              name={"studentId"}
              {...{
                placeholder: "Ingrese su matricula",
                type: "number",
                inputMode: "numeric",
                min: 0,
              }}
            />
            <Input
              label="Contraseña"
              name={"password"}
              {...{ placeholder: "Ingrese su contraseña", type: "password" }}
            />
            <ButtonPrimary type="submit">Iniciar sesión</ButtonPrimary>
          </InputSection>
          <LinkSection>
            <LinkStyled href="">¿Olvidaste tu contraseña?</LinkStyled>
            <span>
              ¿No tienes una cuenta?
              <LinkStyled to={"/auth/register"}> Regístrate</LinkStyled>
            </span>
          </LinkSection>
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

const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 16px;
`;

export default Login;
