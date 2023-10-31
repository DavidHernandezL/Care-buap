import React from "react";
import MainHeader from "@components/MainHeader";
import styled from "styled-components";
import PwdInput from "@components/PwdInput";
import ButtonPrimary from "../../components/ButtonPrimary";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { navigate } = useNavigate();
  return (
    <>
      <MainHeader
        title={"Cambiar contraseña"}
        subtitle={"Ingrese su nueva contraseña"}
        hasIcon
      />
      <Container>
        <form style={{ width: "100%" }}>
          <InputSection>
            <PwdInput
              label="Contraseña"
              name={"password"}
              {...{ placeholder: "Ingrese su contraseña" }}
            />
            <PwdInput
              label="Confirme su contraseña"
              name={"passwordConfirm"}
              {...{ placeholder: "Confirme su contraseña" }}
            />
            <ButtonPrimary
              type="submit"
              onClick={() => navigate("/auth/login")}
            >
              Cambiar contraseña
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

export default ResetPassword;
