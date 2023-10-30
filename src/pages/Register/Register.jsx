import React from "react";
import MainHeader from "@components/MainHeader";
import styled from "styled-components";
import Input from "@components/Input";
import PwdInput from "@components/PwdInput";
import ButtonPrimary from "../../components/ButtonPrimary";

const Register = () => {
  return (
    <>
      <MainHeader title={"Registro"} subtitle={"Ingrese sus datos"} hasIcon />
      <Container>
        <form style={{ width: "100%" }}>
          <InputSection>
            <Input
              label="Nombre Completo"
              name={"fullName"}
              {...{
                placeholder: "Ingrese su nombre completo",
                type: "text",
                inputMode: "text",
                required: true,
              }}
            />
            <Input
              label="Matricula"
              name={"studentId"}
              {...{
                placeholder: "Ingrese su matricula",
                type: "number",
                inputMode: "numeric",
                min: 0,
                required: true,
              }}
            />
            <Input
              label="Correo Institucional"
              name={"email"}
              {...{
                placeholder: "nombre@alumno.buap.mx",
                type: "email",
                inputMode: "email",
                required: true,
              }}
            />
            <PwdInput
              label="Contraseña"
              name={"password"}
              {...{
                placeholder: "Ingrese su contraseña",
                required: true,
              }}
            />

            <PwdInput
              label="Confirmar Contraseña"
              name={"passwordConfirm"}
              {...{
                placeholder: "Confirme su contraseña",
                required: true,
              }}
            />
            <ButtonPrimary type="submit">Registrarse</ButtonPrimary>
          </InputSection>
          <LinkSection>
            <span>
              ¿Ya tienes una cuenta?<Link href=""> Ingresar Ahora</Link>
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

  @media screen and (max-width: 370px) {
    margin-top: 5rem;
  }
`;

const Link = styled.a`
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

export default Register;
