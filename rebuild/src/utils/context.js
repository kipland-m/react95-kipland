import React, { createContext } from 'react';
import DataService from './data.js';

// Initializing Data Service
const DataContext = createContext();
const dataService = new DataService(); 

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={dataService}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

