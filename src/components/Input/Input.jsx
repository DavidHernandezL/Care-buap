import { useFormContext } from 'react-hook-form';
import { Container, Label, InputStyled } from './styles';

const Input = ({ name, label, ...props }) => {
  const { register } = useFormContext();
  return (
    <>
      <Container>
        <Label htmlFor={name}>{label}</Label>
        <InputStyled id={name} name={name} {...props} {...register(name)} />
      </Container>
    </>
  );
};

export default Input;
