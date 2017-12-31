import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {AddressBook} from './components/address-book'
import addressBookApp from './reducers'
import contacts from './contacts'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

// client.query({
//   query: gql`{ contacts {name, phone} }` 
// }).then(console.log);

let store = createStore(addressBookApp)

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AddressBook />
    </Provider>
  </ApolloProvider>,
  document.getElementById('app'),
)