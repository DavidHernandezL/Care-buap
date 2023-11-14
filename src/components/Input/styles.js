import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: var(--secondaryColor);
  position: absolute;
  top: -1rem;
  left: 1rem;
  background-color: var(--white);
`;

const InputStyled = styled.input`
  width: clamp(320px, 100%, 600px);
  padding: 0.5rem;
  border: 1px solid var(--secondaryColor);
  background-color: var(--white);
  border-radius: 1rem;
  font-size: 1.2rem;
  &::placeholder {
    color: var(--textGray);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--secondaryColor);
  }
`;

export { Container, Label, InputStyled };
