import { ApolloClient, HttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from '@apollo/client/link/error';
import fetch from 'isomorphic-fetch';
import config from '@/config';
import { cache } from './cache';

const httpLink = new HttpLink({ uri: config.APOLLO_HTTP_LINK, fetch });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(`token`);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions, path }) => {
      if (extensions.code === `INTERNAL_SERVER_ERROR`) {
        window.localStorage.clear();
        window.location.replace(window.location.origin);
      }
      if (extensions.code === `INSUFFICIENT_PERMISSIONS`) {
        window.localStorage.clear();
        window.location.replace(window.location.origin);
      }
      console.log(message, extensions.code, path);
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);

  return definition.kind === `OperationDefinition`;
}, authLink.concat(httpLink));

const client = new ApolloClient({
  link: errorLink.concat(splitLink),
  cache,
  resolvers: {},
});

export default client;
