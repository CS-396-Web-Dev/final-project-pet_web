"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

const InfoContext = createContext({
  info: {},
  setInfo: () => {},
});

export const useInfoContext = () => useContext(InfoContext);

export default function InfoContextProvider({ children }) {
  const [info, setInfo] = useState({ age: 0, stage: "Infant", weight: 0, time: Date.now() });

  useEffect(() => {
    const savedInfo = localStorage.getItem('info');
    if (savedInfo) {
      setInfo(JSON.parse(savedInfo));
    }
  }, []);

  useEffect(() => {
    if (info) {
      localStorage.setItem('info', JSON.stringify(info));
    }
  }, [info]);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
}
