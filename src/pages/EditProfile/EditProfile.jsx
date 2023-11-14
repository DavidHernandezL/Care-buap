import React from 'react';
import ReturnHeader from '../../components/ReturnHeader';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';
import { editSchema } from '../../utils/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/Input';
import PwdInput from '../../components/InputImage';
import { useEffect } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import ButtonPrimary from '../../components/ButtonPrimary';
// import { updateUser } from "../../services/upload";
import { Cloudinary } from '@cloudinary/url-gen';
import { upload } from '../ResetPassword/upload';
import { useState } from 'react';
import ImgInput from '../../components/InputImage';

const EditProfile = () => {
  const [image, setImage] = useState(null);
  const {
    formState: { errors },
    ...methods
  } = useForm({
    defaultValues: { fullName: user.fullName },
  });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ReturnHeader title='Editar Perfil' />
      <Container>
        <FormProvider {...methods}>
          <form style={{ width: '100%' }} onSubmit={methods.handleSubmit(onSubmit)}>
            <InputSection>
              <ImgInput name={'file'} src={user.img} />
              <Input
                label='Nombre completo'
                name={'fullName'}
                {...{
                  placeholder: 'Cambiar nombre completo',
                  type: 'text',
                  inputMode: 'text',
                }}
              />
              {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
              <PwdInput
                label='Contraseña'
                name={'password'}
                {...{ placeholder: 'Ingrese su contraseña', minLength: '6' }}
              />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
              <ButtonPrimary type='submit'>Actualizar Información</ButtonPrimary>
            </InputSection>
          </form>
        </FormProvider>
      </Container>
    </>
  );
};

export default EditProfile;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  align-items: center;
  height: calc(100vh - 300px);
`;

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 16px;
`;

const PreviewImg = styled.img`
  position: relative;
  margin: auto;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;
