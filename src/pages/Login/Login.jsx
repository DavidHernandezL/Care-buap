import { useForm, FormProvider, set } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import ButtonPrimary from '@components/ButtonPrimary';
import ErrorMessage from '@components/ErrorMessage';
import Input from '@components/Input';
import InputPassword from '@components/InputPassword';
import MainHeader from '@components/MainHeader';

import { loginSchema } from '@utils/validationSchemas';
import { Container, Form, LinkStyled } from './styles';
import Loader from '../../components/Loader';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    formState: { errors },
    ...methods
  } = useForm({ resolver: zodResolver(loginSchema) });

  const loginUser = async (data) => {
    setLoading(true);
    signin(data);
  };

  useEffect(() => {
    if (loginErrors) {
      setLoading(false);
    }
  }, [loginErrors]);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
      navigate('/profile');
    }
  }, [isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainHeader title={'Inicio de sesión'} subtitle={'Ingrese sus credenciales'} />
          <Container>
            <FormProvider {...methods}>
              <Form style={{ width: '100%' }} onSubmit={methods.handleSubmit(loginUser)}>
                {loginErrors && <ErrorMessage>{loginErrors.msg}</ErrorMessage>}
                <Input
                  label='Matricula'
                  name={'studentId'}
                  registerOptions={{ valueAsNumber: true }}
                  {...{
                    placeholder: 'Ingrese su matricula',
                    type: 'number',
                    inputMode: 'numeric',
                  }}
                />
                {errors.studentId && (
                  <ErrorMessage>{errors.studentId.message}</ErrorMessage>
                )}
                <InputPassword label='Contraseña' name={'password'} />
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
                <ButtonPrimary type='submit'>Iniciar sesión</ButtonPrimary>
              </Form>
              <LinkStyled to='/forgot-password'>¿Olvidaste tu contraseña?</LinkStyled>
              <p>
                ¿No tienes una cuenta?{' '}
                <LinkStyled to='/auth/register'>Regístrate aquí</LinkStyled>
              </p>
            </FormProvider>
          </Container>
        </>
      )}
    </>
  );
};

export default Login;
