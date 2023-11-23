import ReturnHeader from '../components/ReturnHeader/ReturnHeader';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { editSchema } from '../utils/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../components/Input';
import PwdInput from '../components/InputImage';
import { useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import ButtonPrimary from '../components/ButtonPrimary';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  createExerciseRequest,
  getExerciseRequest,
  updateExerciseRequest,
} from '../services/exercise';
import InputArea from '../components/InputArea';

const ExercisesForm = () => {
  const { id } = useParams();
  const [steps, setSteps] = useState([]);
  const {
    formState: { errors },
    setValue,
    ...methods
  } = useForm();

  useEffect(() => {
    const getProfesional = async () => {
      const { data: res } = await getExerciseRequest(id);
      setValue('name', res.data.name);
      setValue('description', res.data.description);
      setValue('type', res.data.type);
      setSteps(res.data.steps);
    };
    if (id) getProfesional();
  }, []);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      
      data.steps = steps;

      if (id) {
        const res = await updateExerciseRequest(id, data);
        
      } else {
        const res = await createExerciseRequest(data);
        
      }

      navigate('/dashboard');
    } catch (error) {
      
    }
  };
  return (
    <>
      <ReturnHeader title='Editar Ejercicio' />
      <Container>
        <FormProvider {...methods}>
          <form style={{ width: '100%' }} onSubmit={methods.handleSubmit(onSubmit)}>
            <InputSection>
              <Input
                label='Nombre del ejercicio'
                name={'name'}
                {...{
                  placeholder: 'Cambiar nombre completo',
                  type: 'text',
                  inputMode: 'text',
                }}
              />
              <RadioField>
                <input
                  {...methods.register('type')}
                  name='type'
                  type='radio'
                  value={'RESPIRATION'}
                />
                <label htmlFor=''>Respiración</label>
              </RadioField>
              <RadioField>
                <input
                  {...methods.register('type')}
                  name='type'
                  type='radio'
                  value={'MOTIVATION'}
                />
                <label htmlFor=''>Motivación</label>
              </RadioField>

              {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
              <InputArea
                label='Descripción'
                name={'description'}
                {...{
                  placeholder: 'Cambiar dirección',
                  type: 'text',
                  inputMode: 'text',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <Input
                  label='Pasos'
                  name={'steps'}
                  {...{
                    placeholder: 'Agregar pasos',
                    type: 'text',
                    inputMode: 'text',
                  }}
                />
                <button
                  type='button'
                  onClick={() => setSteps([...steps, methods.getValues('steps')])}
                >
                  Agregar Paso
                </button>

                {steps.map((step, index) => (
                  <Label key={index}>
                    <Step
                      defaultValue={step}
                      type='text'
                      {...methods.register('step' + index)}
                    />
                    <i
                      style={{
                        cursor: 'pointer',
                        fontSize: '1.3rem',
                        color: '#f44336',
                      }}
                      className='bx bx-trash-alt'
                      onClick={() => {
                        const newSteps = steps.filter((step, i) => i !== index);
                        setSteps(newSteps);
                      }}
                    ></i>
                  </Label>
                ))}
              </div>
              <ButtonPrimary type='submit'>Actualizar Información</ButtonPrimary>
            </InputSection>
          </form>
        </FormProvider>
      </Container>
    </>
  );
};

export default ExercisesForm;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  align-items: center;
  margin-top: 1rem;
`;

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 16px;
`;

const Step = styled.input`
  border: 1px solid #ccc;
  width: 340px;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  overflow: hidden;
`;

const Label = styled.label`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const RadioField = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
