import ReturnHeader from '../components/ReturnHeader/ReturnHeader';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { editExercisesSchema, createExerciseSchema } from '../utils/validationSchemas';

const validateData = async (values) => {
  const errors = {};
  console.log(values);
  let hasError = false;
  if (!values.name) errors.name = { type: 'required', message: 'El nombre es requerido' };
  if (!values.description)
    errors.description = { type: 'required', message: 'La descripción es requerida' };
  if (!values.type) errors.type = { type: 'required', message: 'El tipo es requerido' };
  if (!values.steps)
    errors.steps = { type: 'required', message: 'Los pasos son requeridos' };

  if (values.steps?.length === 0)
    errors.steps = { type: 'required', message: 'Al menos se necesita un paso' };
  if (values.name.length < 3)
    errors.name = {
      type: 'required',
      message: 'El nombre necesita al menos 3 caracteres',
    };
  if (values.description.length < 3)
    errors.description = {
      type: 'required',
      message: 'La descripción necesita al menos 3 caracteres',
    };
  if (errors.name || errors.description || errors.type || errors.steps) {
    hasError = true;
  } else {
    hasError = false;
  }
  return {
    values: values,
    errors: hasError ? errors : {},
  };
};

const ExercisesForm = () => {
  const { id } = useParams();

  const schema = id ? editExercisesSchema : createExerciseSchema;

  const [steps, setSteps] = useState([]);
  const navigate = useNavigate();
  const {
    formState: { errors },
    setValue,
    watch,
    clearErrors,
    ...methods
  } = useForm({
    resolver: validateData,
  });

  methods.register('steps', {
    required: true,
  });

  useEffect(() => {
    const getProfesional = async () => {
      const { data: res } = await getExerciseRequest(id);
      console.log(res.data);
      setValue('name', res.data.name);
      setValue('description', res.data.description);
      setValue('type', res.data.type);
      setSteps(res.data.steps);
      setValue('steps', res.data.steps);
    };
    if (id) getProfesional();
  }, []);

  const handleAddStep = () => {
    const newSteps = [...steps, watch('text')];
    setValue('steps', newSteps);
    setSteps(newSteps);
    setValue('text', '');
    clearErrors('steps');
  };

  const handleRemoveStep = (id) => {
    const newSteps = steps.filter((step, index) => index !== id);
    setValue('steps', newSteps);

    setSteps(newSteps);
  };

  const onSubmit = async (data) => {
    try {
      if (id) {
        const res = await updateExerciseRequest(id, data);
      } else {
        const res = await createExerciseRequest(data);
      }
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors);
  console.log('wat', watch('steps'));
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
              {errors?.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
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
              {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
              <InputArea
                label='Descripción'
                name={'description'}
                {...{
                  placeholder: 'Cambiar dirección',
                  type: 'text',
                  inputMode: 'text',
                }}
              />
              {errors.description && (
                <ErrorMessage>{errors.description.message}</ErrorMessage>
              )}
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
                  name={'text'}
                  {...{
                    placeholder: 'Agregar pasos',
                    type: 'text',
                    inputMode: 'text',
                  }}
                />
                {errors.steps && <ErrorMessage>{errors.steps.message}</ErrorMessage>}
                <button type='button' onClick={handleAddStep}>
                  Agregar paso
                </button>
                <ul>
                  {steps.map((step, index) => (
                    <li key={index}>
                      {step}
                      <i
                        style={{
                          cursor: 'pointer',
                          fontSize: '1.3rem',
                          color: '#f44336',
                        }}
                        className='bx bx-trash-alt'
                        onClick={() => handleRemoveStep(index)}
                      ></i>
                    </li>
                  ))}
                </ul>
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
  /* appearance: none; */
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
