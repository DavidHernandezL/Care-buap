import { useForm, FormProvider } from 'react-hook-form';

import Input from '@components/Input';
import InputPassword from '@components/InputPassword';

import MainHeader from '@components/MainHeader';
import ButtonPrimary from '@components/ButtonPrimary';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../utils/validationSchemas';
import ErrorMessage from '@components/ErrorMessage';

const Login = () => {
  const {
    formState: { errors },
    ...methods
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data) => console.log(data);

  return (
    <>
      <MainHeader title={'Inicio de sesión'} subtitle={'Ingrese sus credenciales'} />
      <Container>
        <FormProvider {...methods}>
          <form style={{ width: '100%' }} onSubmit={methods.handleSubmit(onSubmit)}>
            <InputSection>
              <Input
                label='Correo Institucional'
                name={'studentId'}
                {...{
                  placeholder: 'Ingrese su correo institucional',
                  type: 'number',
                  inputMode: 'numeric',
                }}
              />
              {errors.studentId && (
                <ErrorMessage>{errors.studentId.message}</ErrorMessage>
              )}
              <InputPassword label='Contraseña' name={'password'} />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
              <ButtonPrimary type='submit'>Iniciar sesión</ButtonPrimary>
            </InputSection>
            <LinkSection>
              <LinkStyled to={'/auth/recover-password'}>
                ¿Olvidaste tu contraseña?
              </LinkStyled>
              <span>
                ¿No tienes una cuenta?
                <LinkStyled to={'/auth/register'}> Regístrate</LinkStyled>
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
