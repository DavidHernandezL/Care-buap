import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <SecondaryHeader title={'Perfil'} subtitle={'Información del usuario'} />

      <UserCard>
        <img
          src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${user.fullName}`}
          alt='Foto de perfil'
        />
        <section>
          <h3>{user.fullName}</h3>
          <p>{user.studentId}</p>
        </section>
      </UserCard>
      <NavBar />
    </>
  );
};

const UserCard = styled.article`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin: 10px auto;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    border: 6px solid #eaeaea;
  }

  section {
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      line-height: 20px;
      color: #191919f2;
    }

    p {
      font-size: 1.3rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      line-height: 14px;
      color: #191919bf;
    }
  }
`;
export default Profile;
