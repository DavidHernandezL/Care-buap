import { useForm, FormProvider } from 'react-hook-form';

import ButtonPrimary from '../../components/ButtonPrimary';
import ErrorMessage from '@components/ErrorMessage';
import Input from '@components/Input';
import InputPassword from '@components/InputPassword';
import MainHeader from '@components/MainHeader';
import { Container, Form, LinkStyled } from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { registerUserSchema } from '@utils/validationSchemas';

import { registerUserRequest } from '@services/user';

const Register = () => {
  const {
    formState: { errors },
    ...methods
  } = useForm({ resolver: zodResolver(registerUserSchema) });

  const registerUser = async (data) => {
    const response = await registerUserRequest(data);
    console.log(response);
  };

  console.log(errors);
  return (
    <>
      <MainHeader title={'Registro'} subtitle={'Ingrese sus datos'} hasIcon />
      <Container>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(registerUser)}>
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
              registerOptions={{ valueAsNumber: true }}
              {...{
                placeholder: 'Ingrese su matricula',
                type: 'number',
                inputMode: 'numeric',
              }}
            />
            {errors.studentId && <ErrorMessage>{errors.studentId.message}</ErrorMessage>}
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
            <InputPassword
              label='Contraseña'
              name={'password'}
              {...{
                placeholder: 'Ingrese su contraseña',
              }}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <InputPassword
              label='Confirmar contraseña'
              name={'confirmPassword'}
              {...{
                placeholder: 'Confirme su contraseña',
              }}
            />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
            <ButtonPrimary type='submit'>Registrarse</ButtonPrimary>
          </Form>
          <p>
            ¿Ya tienes cuenta? <LinkStyled to='/auth/login'>Inicia sesión</LinkStyled>
          </p>
        </FormProvider>
      </Container>
    </>
  );
};

export default Register;
