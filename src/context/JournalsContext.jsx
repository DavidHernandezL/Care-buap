import { useContext } from 'react';
import { createContext } from 'react';
import {
  getJournalRequest,
  createJournalRequest,
  getJournalByIdRequest,
  updateJournalRequest,
} from '../services/journal';
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
    
    setJournals(res.data);
  };
  const createJournal = async (journal) => {
    const res = await createJournalRequest(journal);
    
  };

  const getJournal = async (id) => {
    const { data: res } = await getJournalByIdRequest(id);
    return res.data;
  };

  const updateJournal = async (id, journal) => {
    const { data: res } = await updateJournalRequest(id, journal);
    return res.data;
  };

  return (
    <JournalsContext.Provider
      value={{
        journals,
        getJournals,
        createJournal,
        getJournal,
        updateJournal,
      }}
    >
      {children}
    </JournalsContext.Provider>
  );
};
