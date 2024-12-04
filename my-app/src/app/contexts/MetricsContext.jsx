"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

const MetricsContext = createContext({
  metrics: {},
  setMetrics: () => {},
});

export const useMetricsContext = () => useContext(MetricsContext);

export default function MetricsContextProvider({ children }) {
  const [metrics, setMetrics] = useState({ health: 50, happiness: 50, satiation: 50, cleanliness: 50 });

  useEffect(() => {
    const savedMetrics = localStorage.getItem('metrics');
    if (savedMetrics) {
      setMetrics(JSON.parse(savedMetrics));
    }
  }, []);

  useEffect(() => {
    if (metrics) {
      localStorage.setItem('metrics', JSON.stringify(metrics));
    }
  }, [metrics]);

  return (
    <MetricsContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </MetricsContext.Provider>
  );
}