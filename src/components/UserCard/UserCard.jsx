import styled from 'styled-components';
import moment from 'moment';

const UserCard = ({ user }) => {
  moment.updateLocale('es', {
    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'una año',
      yy: '%d años',
    },
  });
  const date = moment(user.createdAt).locale('es');
  return (
    <Card>
      <img src={user.image || '/no-image.png'} alt='Foto de perfil' />
      <section>
        <h3>{user.fullName}</h3>
        <p>{user.studentId}</p>
        <p>{date.fromNow()}</p>
      </section>
    </Card>
  );
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
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
    object-fit: cover;
    border: 6px solid #eaeaea;
  }

  section {
    h3 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      line-height: 20px;
      color: #191919f2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
    }

    p {
      font-size: 0.9rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      line-height: 14px;
      color: #191919bf;
    }
  }
`;

export default UserCard;
