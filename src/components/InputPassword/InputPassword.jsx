import React, { useState } from 'react';
import { Container, Label, TextField, ShowIcon, ShowOffIcon } from './styles';
import { useFormContext } from 'react-hook-form';

const InputPassword = ({ name, label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useFormContext();

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      {showPassword ? (
        <ShowOffIcon
          onClick={() => setShowPassword(!showPassword)}
          width={25}
          height={25}
        />
      ) : (
        <ShowIcon onClick={() => setShowPassword(!showPassword)} width={25} height={25} />
      )}
      <TextField
        id={name}
        name={name}
        placeholder='Ingrese su contraseña'
        type={showPassword ? 'text' : 'password'}
        {...register(name)}
      />
    </Container>
  );
};

export default InputPassword;
