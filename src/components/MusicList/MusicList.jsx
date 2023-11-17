const MusicList = ({ data }) => {
  return (
    <ul>
      {data.songs.map((item, index) => (
        <li key={index}>
          <h3>{item.title}</h3>
          <audio controls>
            <source src={item.url} type='audio/mpeg' />
          </audio>
        </li>
      ))}
    </ul>
  );
};
export default MusicList;
