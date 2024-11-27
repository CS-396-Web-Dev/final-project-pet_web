"use client";
import {
    createContext,
    useContext,
    useState,
  } from 'react';

  
  const InfoContext = createContext({
    info:{},
    setInfo: () => {},
  });
  
  export const useInfoContext = () => useContext(InfoContext);
  
  export default function InfoContextProvider({
    children,
  }) {
    const [info, setInfo] = useState({age: 0, stage: "Infant", weight: 0, time: Date.now()});
  
    return (
      <InfoContext.Provider value={{info, setInfo}}>
        {children}
      </InfoContext.Provider>
    );
  }