import React from 'react';
import MainHeader from '@components/MainHeader';
import styled from 'styled-components';
import PwdInput from '@components/InputPassword';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '../../utils/validationSchemas';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const { resetPassword, errors: resetErrors } = useAuth();
  const {
    handleSubmit,
    formState: { errors },
    ...methods
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data) => {
    const res = await resetPassword(id, token, data);
    if (res.status === 'OK') {
      alert('Contraseña cambiada correctamente');
      navigate('/auth/login');
    }
  };

  console.log(errors);
  return (
    <>
      <MainHeader
        title={'Cambiar contraseña'}
        subtitle={'Ingrese su nueva contraseña'}
        hasIcon
      />
      <Container>
        <FormProvider {...methods}>
          <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <InputSection>
              {resetErrors && <ErrorMessage>{resetErrors.msg}</ErrorMessage>}
              <PwdInput
                label='Nueva contraseña'
                name={'password'}
                {...{ placeholder: 'Ingrese una nueva contraseña' }}
              />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
              <p style={{ fontSize: '0.8rem' }}>
                *La contraseña debe tener al menos 6 caracteres
              </p>
              <PwdInput
                label='Confirme su contraseña'
                name={'passwordConfirm'}
                {...{ placeholder: 'Confirme su contraseña' }}
              />
              {errors.passwordConfirm && (
                <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
              )}
              <ButtonPrimary type='submit'>Cambiar contraseña</ButtonPrimary>
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

export default ResetPassword;
