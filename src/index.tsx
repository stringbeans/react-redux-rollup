import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {AddressBook} from './components/address-book'
import contacts from './contacts'

ReactDOM.render(
  <AddressBook contacts={contacts} />,
  document.getElementById('app'),
)