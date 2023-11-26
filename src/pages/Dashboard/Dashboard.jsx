import { useEffect } from 'react';
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';
import UserCard from '../../components/UserCard/UserCard';
import styled from 'styled-components';
import { getUsersRequest } from '../../services/user';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getExercisesRequest } from '../../services/exercise';
import { getProfessionalsRequest } from '../../services/professional';
import music from '../../data/music.json';
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data: res } = await getUsersRequest();
      setUsers(res.data);
    };

    const getExercises = async () => {
      const { data: res } = await getExercisesRequest();
      setExercises(res.data);
    };

    const getProfessionals = async () => {
      const { data: res } = await getProfessionalsRequest(undefined);
      setProfessionals(res.data);
    };

    getUsers();
    getExercises();
    getProfessionals();
  }, []);

  return (
    <>
      <SecondaryHeader title={'Administrar'} />;
      <Container>
        <UserSection>
          <Info>
            <h2>Usuarios registrados: </h2>
            <span>{users.length}</span>
            <Link to='users'>Ver todos los usuarios</Link>
          </Info>
          <UsersRecent>
            <h3>Usuarios recientes</h3>

            <CardList>
              {users.map((user) => (
                <li key={user.uid}>
                  <UserCard user={user} />
                </li>
              ))}
            </CardList>
          </UsersRecent>
        </UserSection>
        <ExerciseSection>
          <div>
            <h2>Ejercicios guardados: </h2>
            <span>{exercises.length}</span>
          </div>

          <Link to='exercises'>Ver los ejercicios</Link>
        </ExerciseSection>
        <ProfesionalSection>
          <Info>
            <h2>Profesionales guardados: </h2>
            <span>{professionals.length}</span>
            <Link to='professionals'>Ver todos los profesionales</Link>
          </Info>
          <UsersRecent>
            <h3>Agregados recientemente</h3>

            <CardList>
              {professionals.map((professional) => (
                <li key={professional._id}>
                  <UserCard user={professional} />
                </li>
              ))}
            </CardList>
          </UsersRecent>
        </ProfesionalSection>
      </Container>
      <NavBar />
    </>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem 1rem;
  grid-template-areas:
    'Users Users Users Users'
    'Exercises Exercises Exercises Exercises'
    'Profesionales Profesionales Profesionales Profesionales';
  height: 80vh;
  margin: 0 1rem;
  margin-bottom: 5rem;
`;

const UserSection = styled.section`
  grid-area: Users;
  display: flex;
  border-radius: 10px;
  padding: 0.5rem;
  gap: 1rem;
  min-width: 350px;
  position: relative;
`;

const Info = styled.div`
  background-color: #a7c5dd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  min-width: 300px;
  width: 20%;
  position: sticky;
  top: 0;
  left: 0;
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 20px;
  }
  span {
    font-size: 1.9rem;
    font-weight: 700;
    color: #fff;
    background-color: #8096a8;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    background: #fff;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CardList = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const UsersRecent = styled.div`
  border-radius: 10px;
  background-color: #a7c5dd;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  width: 80%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ExerciseSection = styled.section`
  grid-area: Exercises;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #a7c5dd;
  padding: 0.5rem;
  gap: 1rem;
  min-width: 350px;
  position: relative;
  align-items: center;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
  }
  a {
    background: #fff;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  span {
    font-size: 1.9rem;
    font-weight: 700;
    color: #fff;
    background-color: #8096a8;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MusicSection = styled.section`
  grid-area: Music;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #a7c5dd;
  padding: 0.5rem;
  gap: 1rem;
  min-width: 350px;
  position: relative;
  align-items: center;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
  }
  a {
    background: #fff;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  span {
    font-size: 1.9rem;
    font-weight: 700;
    color: #fff;
    background-color: #8096a8;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProfesionalSection = styled.section`
  grid-area: Profesionales;
  display: flex;
  border-radius: 10px;
  padding: 0.5rem;
  gap: 1rem;
  min-width: 350px;
  position: relative;
`;

export default Dashboard;
