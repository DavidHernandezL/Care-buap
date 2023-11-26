import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const ButtonChat = () => {
  return (
    <Container to={`/chat/${uuidv4()}`}>
      <Img src='/assets/logo.svg' alt='Logo App' />
      <i class='bx bx-plus'></i>
    </Container>
  );
};

const Container = styled(Link)`
  position: fixed;
  bottom: 8rem;
  right: 4rem;
  width: 80px;
  height: 80px;
  background-color: #00b5e2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  i {
    font-size: 1.5rem;
    color: #fff;
    position: absolute;
    bottom: 10px;
    right: 1rem;
  }
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

export default ButtonChat;
