import styled from 'styled-components';
import { Show, ShowOff } from '@icons';

const Container = styled.div`
  position: relative;
  max-width: 325px;
  max-height: 75px;
`;

const TextField = styled.input`
  width: 100%;
  padding: 0.6rem 1rem;
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
  top: -60px;
  left: 20px;
  font-size: 1.1rem;
  background-color: #fff;
  padding: 0 0.4rem;
  color: #00b5e2;
`;

const ShowIcon = styled(Show)`
  position: relative;
  bottom: -2.4rem;
  left: 18rem;
  color: var(--textGray);
`;

const ShowOffIcon = styled(ShowOff)`
  position: relative;
  bottom: -2.4rem;
  left: 18rem;
  color: var(--textGray);
`;

export { Container, Label, TextField, ShowIcon, ShowOffIcon };
