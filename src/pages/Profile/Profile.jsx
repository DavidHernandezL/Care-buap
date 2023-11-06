import React from "react";
import SecondaryHeader from "../../components/SecondaryHeader";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import UserEdit from "../../components/Icons/UserEdit";
import RightLine from "../../components/Icons/RightLine";

const Profile = () => {
  return (
    <>
      <SecondaryHeader title={"Perfil"} subtitle={"Información del usuario"} />
      <UserCard>
        <img src="/test.jpg" alt="Foto de perfil" />
        <section>
          <h3>David Hernandez Lopez</h3>
          <p>201929788</p>

          <button>
            <UserEdit />
            Editar
            <RightLine width={20} height={20} />
          </button>
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
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  section {
    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      line-height: 20px;
      color: #191919f2;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      line-height: 14px;
      color: #191919bf;
    }

    button {
      display: flex;
      gap: 3px;
      align-items: center;
      justify-content: flex-end;
      vertical-align: middle;
      width: 100%;
      padding: 0.8rem;
      border-radius: 0.5rem;
      color: #19191966;
      font-size: 1.2rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
export default Profile;
