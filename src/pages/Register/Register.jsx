import React from 'react';
import MainHeader from '@components/MainHeader';
import styled from 'styled-components';
import Input from '@components/Input';
import PwdInput from '@components/InputPassword';
import ButtonPrimary from '../../components/ButtonPrimary';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUserSchema } from '../../utils/validationSchemas';
import { Link } from 'react-router-dom';
import ErrorMessage from '@components/ErrorMessage';
import { useNavigate } from 'react-router-dom';

import { useForm, FormProvider } from 'react-hook-form';
import { useEffect } from 'react';

const Register = () => {
  const {
    formState: { errors },
    ...methods
  } = useForm({ resolver: zodResolver(registerUserSchema) });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <MainHeader title={'Registro'} subtitle={'Ingrese sus datos'} hasIcon />
      <Container>
        <FormProvider {...methods}>
          <form style={{ width: '100%' }} onSubmit={methods.handleSubmit(onSubmit)}>
            <InputSection>
              <Input
                label='Nombre Completo'
                name={'fullName'}
                {...{
                  placeholder: 'Ingrese su nombre completo',
                  type: 'text',
                  inputMode: 'text',
                }}
              />
              {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
              <Input
                label='Matricula'
                name={'studentId'}
                {...{
                  placeholder: 'Ingrese su matricula',
                  type: 'number',
                  inputMode: 'numeric',
                }}
              />
              {errors.studentId && (
                <ErrorMessage>{errors.studentId.message}</ErrorMessage>
              )}
              <Input
                label='Correo Institucional'
                name={'email'}
                {...{
                  placeholder: 'nombre@alumno.buap.mx',
                  type: 'email',
                  inputMode: 'email',
                }}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              <PwdInput
                label='Contraseña'
                name={'password'}
                {...{
                  placeholder: 'Ingrese su contraseña',
                }}
              />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
              <PwdInput
                label='Confirmar Contraseña'
                name={'confirmPassword'}
                {...{
                  placeholder: 'Confirme su contraseña',
                }}
              />
              {errors.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
              )}
              <ButtonPrimary type='submit'>Registrarse</ButtonPrimary>
            </InputSection>
            <LinkSection>
              <span>
                ¿Ya tienes una cuenta?
                <LinkStyled to={'/auth/login'}> Ingresar Ahora</LinkStyled>
              </span>
            </LinkSection>
          </form>
        </FormProvider>
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

  @media screen and (max-height: 700px) and (min-width: 768px) {
    height: calc(100vh - 200px);
  }
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
