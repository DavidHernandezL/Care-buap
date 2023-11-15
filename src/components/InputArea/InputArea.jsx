import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const InputArea = ({ name, ...props }) => {
  const { register } = useFormContext();
  return (
    <Container>
      <TextField id={name} name={name} cols={10} {...props} {...register(name)} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 325px;
  height: 325px;
`;

const TextField = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0.7rem 1rem;
  outline: none;
  font-size: 1.1rem;
  resize: none;

  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(181, 226, 226, 0.2);

  &::placeholder {
    color: #bbb;
    font-size: 1rem;
  }

  &:focus {
    border-color: #00b5e2;
  }
`;
export default InputArea;
