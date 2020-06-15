import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const App = () => (
  <Query
    query={gql`
      {
        nombre
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Cargando...</p>
      if (error) return <p>Error</p>

      return data.nombre
    }}
  </Query>
);

export default App;