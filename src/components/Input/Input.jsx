import { useFormContext } from 'react-hook-form';
import { Container, Label, TextField } from './styles';

const Input = ({ name, label, registerOptions, ...props }) => {
  const { register } = useFormContext();
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextField
        id={name}
        name={name}
        {...props}
        {...register(name, { ...registerOptions })}
      />
    </Container>
  );
};

export default Input;
