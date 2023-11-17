import { useParams } from 'react-router-dom';
import ReturnHeader from '../../components/ReturnHeader/ReturnHeader';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import exercises from '../../data/exercises.json';
import Accordion from '../../components/Accordion/Accordion';
import MusicList from '../../components/MusicList/MusicList';

const Exercise = () => {
  const index = {
    respiration: 0,
    motivation: 1,
    music: 2,
  };
  const { id } = useParams();
  const selectedExercise = exercises[index[id]];

  return (
    <>
      <ReturnHeader title={'Ejercicios'} />
      {index[id] === 2 ? (
        <MusicList data={selectedExercise} />
      ) : (
        <Accordion data={selectedExercise} />
      )}
    </>
  );
};
export default Exercise;
