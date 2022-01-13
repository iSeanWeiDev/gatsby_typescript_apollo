/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext, createContext } from 'react';

const AppStateContext = createContext(null);
AppStateContext.displayName = `AppStateContext`;

const initialState = {
  themeMode: `light`,
};

function AppStateProvider({ children, ...rest }) {
  const [state, setState] = useState(initialState);
  const value = [state, setState];

  return (
    <AppStateContext.Provider value={value} {...rest}>
      {children}
    </AppStateContext.Provider>
  );
}

const useAppState = () => useContext(AppStateContext);

export { AppStateProvider, useAppState };
