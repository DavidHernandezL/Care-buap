import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 325px;
`;

const TextField = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  outline: none;
  font-size: 1.1rem;

  &::placeholder {
    color: #bbb;
    font-size: 1rem;
  }

  &:focus {
    border-color: #00b5e2;
  }
`;

const Label = styled.label`
  position: relative;
  top: 10px;
  left: 20px;
  font-size: 1.1rem;
  background-color: #fff;
  padding: 0 0.4rem;
  color: #00b5e2;
`;

export { Container, Label, TextField };
