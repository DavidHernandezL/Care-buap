import styled from 'styled-components';

const MusicList = ({ data }) => {
  
  return (
    <Container>
      {data.songs.map((item, index) => (
        <Item key={index}>
          <h3>{item.title}</h3>
          <audio controls>
            <source src={item.url} type='audio/mpeg' />
          </audio>
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 1rem;
  padding: 1rem;
  list-style: none;
  margin: 1rem;
  justify-items: center;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid #0000000d;
  background-color: rgba(161, 180, 180, 0.2);
  width: clamp(300px, 100%, 600px);
  height: 80px;
  padding: 0 16px;
  margin: 16px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

export default MusicList;
