import * as React from 'react'
import ContactsList from '../containers/contacts-list'
import ContactView from '../containers/contact-view'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export interface IContact {
  name: string
  phone: string
}

export interface IAddressBookProps {
  contacts: Array<IContact>
  contact: IContact
}

class AddressBookComponent extends React.Component<IAddressBookProps> {
  constructor(props: IAddressBookProps) {
    super(props)
  }

  render() {
    return (
      <div>
        <ContactsList contacts={this.props.data.contacts} />
        <ContactView />
      </div>
    )
  }
}

export const AddressBook = graphql(gql`{ contacts {name, phone} }`)(AddressBookComponent)