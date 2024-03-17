'use client';
import { createContext, useEffect, useState } from 'react';
import { JSONData } from './data';
import data from './data.json';

export const GlobalProvider = createContext<JSONData | null>(null);
export default function GlobalStates({ children }: any) {
  const [jsonData, setJsonData] = useState<JSONData | null>(null);
  useEffect(() => {
    setJsonData(data);
  }, []);
  return <GlobalProvider.Provider value={jsonData}>{children}</GlobalProvider.Provider>;
}
