import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const httpLink = createHttpLink({ uri: 'http://localhost:4000/graphql' });

const cliente = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={cliente}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
