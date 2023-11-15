import React, { useState } from 'react';
import { Container, Label, TextField, ShowIcon, ShowOffIcon } from './styles';
import { useFormContext } from 'react-hook-form';

const InputPassword = ({ name, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useFormContext();

  return (
    <Container>
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
      <Label htmlFor={name}>{label}</Label>
    </Container>
  );
};

export default InputPassword;
