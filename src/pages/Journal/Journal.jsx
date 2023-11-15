import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import ButtonPrimary from '@components/ButtonPrimary';
import ErrorMessage from '@components/ErrorMessage';
import Input from '@components/Input';
import InputPassword from '@components/InputPassword';
import ReturnHeader from '@components/ReturnHeader';

import { loginSchema } from '@utils/validationSchemas';
import { Container, Form, DateStyled } from './styles';

import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputArea from '../../components/InputArea';
import InputMood from '../../components/InputMood';
import { createPostSchema } from '../../utils/validationSchemas';
import { useJournals } from '../../context/JournalsContext';

const Journal = () => {
  const { errors: journalErrors } = useAuth();
  const { createJournal } = useJournals();
  const navigate = useNavigate();

  const {
    formState: { errors },
    ...methods
  } = useForm({ resolver: zodResolver(createPostSchema) });

  const journalSubmit = async (data) => {
    const res = await createJournal(data);
    navigate('/diary');
  };

  useEffect(() => {
    if (journalErrors) {
      toast.error(journalErrors.msg, { duration: 3000 });
    }
  }, [journalErrors]);

  return (
    <>
      <ReturnHeader title='Diario' />

      <Container>
        <FormProvider {...methods}>
          <Form style={{ width: '100%' }} onSubmit={methods.handleSubmit(journalSubmit)}>
            <DateStyled>
              Fecha:{' '}
              {new Date().toLocaleString('es-MX', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              })}
            </DateStyled>
            <Input
              label='Titulo'
              name={'title'}
              {...{
                placeholder: 'Escribe el titulo de tu diario',
              }}
            />
            {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

            <InputMood label='Estado de ánimo' name={'mood'} />
            {errors.mood && <ErrorMessage>{errors.mood.message}</ErrorMessage>}
            <InputArea
              name={'description'}
              {...{ placeholder: '¿Qué tal estuvo tu día?' }}
            />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
            <ButtonPrimary type='submit' {...{ style: { backgroundColor: '#003B5C' } }}>
              Publicar
            </ButtonPrimary>
          </Form>
        </FormProvider>
      </Container>
    </>
  );
};

export default Journal;
