import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin-top: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const LinkStyled = styled(Link)`
  color: #00b5e2;
`;

export { Container, Form, LinkStyled };
