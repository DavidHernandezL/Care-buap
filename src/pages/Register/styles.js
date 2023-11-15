import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #00b5e2;
`;

export { Container, Form, LinkStyled };
