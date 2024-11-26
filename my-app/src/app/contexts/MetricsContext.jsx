"use client";
import {
    createContext,
    useContext,
    useState,
  } from 'react';

  
  const MetricsContext = createContext({
    metrics:{},
    setMetrics: () => {},
  });
  
  export const useMetricsContext = () => useContext(MetricsContext);
  
  export default function MetricsContextProvider({
    children,
  }) {
    const [metrics, setMetrics] = useState({health: 0, happiness: 0, satiation:0, cleanliness: 0});
  
    return (
      <MetricsContext.Provider value={{ metrics, setMetrics}}>
        {children}
      </MetricsContext.Provider>
    );
  }