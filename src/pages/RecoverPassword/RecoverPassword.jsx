import React from 'react';
import MainHeader from '@components/MainHeader';
import styled from 'styled-components';
import Input from '@components/Input';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage';

const RecoverPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { errors: recoverErrors, recoverPassword } = useAuth();
  const {
    formState: { errors },
    ...methods
  } = useForm();

  useEffect(() => {
    if (recoverErrors) {
      setLoading(false);
    }
  }, [recoverErrors]);

  const onSubmit = async (email) => {
    console.log(email); // { email: 'email' }
    const res = await recoverPassword(email);
    // navigate('/auth/reset-password');
  };

  return (
    <>
      <MainHeader
        title={'Recuperar contraseña'}
        subtitle={'Ingrese sus credenciales'}
        hasIcon
      />
      <Container>
        <FormProvider {...methods}>
          <form style={{ width: '100%' }} onSubmit={methods.handleSubmit(onSubmit)}>
            <InputSection>
              {recoverErrors && <ErrorMessage>{recoverErrors.msg}</ErrorMessage>}
              <Input
                label='Correo Institucional'
                name={'email'}
                {...{ placeholder: 'nombre@alumno.buap.mx', type: 'email' }}
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
              <ButtonPrimary type='submit'>Enviar correo de recuperación</ButtonPrimary>
            </InputSection>
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
