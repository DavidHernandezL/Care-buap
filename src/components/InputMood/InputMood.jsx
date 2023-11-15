import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
const InputMood = ({ name, ...props }) => {
  const { register } = useFormContext();
  return (
    <>
      <Container>
        <InputContainer className='input-container'>
          <InputRadio
            id='happy'
            type='radio'
            name={name}
            value={'happy'}
            {...register(name)}
          />
          <RadioTile className='radio-tile'>
            <img src='/src/assets/happy.svg' />
          </RadioTile>
        </InputContainer>

        <InputContainer className='input-container'>
          <InputRadio
            id='regular'
            type='radio'
            name={name}
            value={'regular'}
            {...register(name)}
          />
          <RadioTile className='radio-tile'>
            <img src='/src/assets/regular.svg' />
          </RadioTile>
        </InputContainer>

        <InputContainer className='input-container'>
          <InputRadio
            id='sad'
            type='radio'
            name={name}
            value={'sad'}
            {...register(name)}
          />
          <RadioTile className='radio-tile'>
            <img src='/src/assets/sad.svg' />
          </RadioTile>
        </InputContainer>
      </Container>
      <label htmlFor={name}>Seleccione un estado de ánimo</label>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 325px;
  justify-content: center;
`;

const InputContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0.5rem;

  :checked + .radio-tile {
    background-color: #0eb8e2;
    border: 2px solid transparent;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }

  :hover + .radio-tile {
    box-shadow: 0 0 12px var(--primary-color);
  }
`;

const InputRadio = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
`;

const RadioTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 2px solid #ccc;
  border-radius: 50%;
  transition: all 300ms ease;
`;
export default InputMood;
