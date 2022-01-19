import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AppStateProvider } from '@/providers';
import client from '@/apollo/proxy';

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <AppStateProvider>{element}</AppStateProvider>
    </ApolloProvider>
  );
};
