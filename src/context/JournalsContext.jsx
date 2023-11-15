import { useContext } from 'react';
import { createContext } from 'react';
import { getJournalRequest, createJournalRequest } from '../services/journal';
import { useState } from 'react';

const JournalsContext = createContext();

export const useJournals = () => {
  const context = useContext(JournalsContext);
  if (!context) {
    throw new Error('useJournals must be used within a JournalsProvider');
  }
  return context;
};

export const JournalsProvider = ({ children }) => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  const getJournals = async () => {
    const { data: res } = await getJournalRequest();
    console.log(res.data);
    setJournals(res.data);
  };
  const createJournal = async (journal) => {
    const res = await createJournalRequest(journal);
    console.log(res);
  };

  return (
    <JournalsContext.Provider
      value={{
        journals,
        getJournals,
        createJournal,
      }}
    >
      {children}
    </JournalsContext.Provider>
  );
};
