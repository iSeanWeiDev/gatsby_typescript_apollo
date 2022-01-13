import React from 'react';
import { AppStateProvider } from '@/providers';

export const wrapRootElement = ({ element }) => {
  return <AppStateProvider>{element}</AppStateProvider>;
};
