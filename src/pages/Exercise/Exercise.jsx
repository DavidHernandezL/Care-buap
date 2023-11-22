import { useParams } from 'react-router-dom';
import ReturnHeader from '../../components/ReturnHeader/ReturnHeader';
import { useState } from 'react';
import music from '../../data/music.json';
import Accordion from '../../components/Accordion/Accordion';
import MusicList from '../../components/MusicList/MusicList';
import { useEffect } from 'react';
import { getExercisesRequest } from '../../services/exercise';

const Exercise = () => {
  const info = {
    respiration: {
      title: 'Ejercicios de respiración',
      description:
        'Los ejercicios de respiración pueden ayudar a mejorar la salud mental de varias maneras. Pueden ayudar a reducir el estrés, la ansiedad y la depresión. También pueden mejorar el estado de ánimo y la concentración.',
      index: 0,
    },
    motivation: {
      title: 'Ejercicios de motivación',
      description:
        'Los ejercicios de motivación pueden ayudar a aumentar la energía, mejorar el estado de ánimo y reducir el estrés. También pueden ayudar a establecer y alcanzar metas.',
      index: 1,
    },
  };

  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(music);

  useEffect(() => {
    const getExercises = async () => {
      const { data: res } = await getExercisesRequest();

      const exercisesAvailable = res.data.filter(
        (exercise) => exercise.type === id.toUpperCase()
      );
      console.log(exercisesAvailable);
      const data = {
        title: info[id].title,
        description: info[id].description,
        exercises: exercisesAvailable,
      };
      console.log(data);
      setExercises(data);
      setLoading(false);
    };

    if (id !== 'music') getExercises();

    if (id === 'music') setLoading(false);
  }, []);

  console.log(exercises);
  return (
    <>
      <ReturnHeader title={'Ejercicios'} />
      {loading ? (
        <h1>Cargando...</h1>
      ) : id === 'music' ? (
        <MusicList data={music} />
      ) : (
        <Accordion data={exercises} />
      )}
    </>
  );
};
export default Exercise;
