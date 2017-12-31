import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {AddressBook} from './components/address-book'
import addressBookApp from './reducers'
import contacts from './contacts'

let store = createStore(addressBookApp)

ReactDOM.render(
  <Provider store={store}>
    <AddressBook contacts={contacts} />
  </Provider>,
  document.getElementById('app'),
)