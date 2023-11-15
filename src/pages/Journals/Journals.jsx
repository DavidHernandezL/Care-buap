import { Link } from 'react-router-dom';
import ReturnHeader from '../../components/ReturnHeader/ReturnHeader';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useJournals } from '../../context/JournalsContext';
import { useState } from 'react';

const Journals = () => {
  const [journal, setJournal] = useState({});
  const moods = {
    regular: 'Indiferente',
    happy: 'Feliz',
    sad: 'Triste',
  };
  const { getJournal } = useJournals();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getJournalById = async () => {
      const journal = await getJournal(id);
      setJournal(journal);
    };
    getJournalById();
  }, []);

  return (
    <>
      <ReturnHeader title='Diario' />
      <main>
        <header>
          <h1>{journal.title}</h1>
          <p>Fecha: {journal.date}</p>
        </header>
        <section>
          <div>
            <img src={`/src/assets/${journal.mood}.svg`} alt='' />
            <p>{moods[journal.mood]}</p>
          </div>
          <p>{journal.description}</p>
          <Link to={`/Dairy/id`}>Editar</Link>
        </section>
      </main>
    </>
  );
};
export default Journals;
