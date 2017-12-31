import * as React from 'react'
import ContactsList from '../containers/contacts-list'
import ContactView from '../containers/contact-view'

export interface IContact {
  name: string
  phone: string
}

export interface IAddressBookProps {
  contacts: Array<IContact>
  contact: IContact
}

export class AddressBook extends React.Component<IAddressBookProps> {
  constructor(props: IAddressBookProps) {
    super(props)
  }

  render() {
    return (
      <div>
        <ContactsList contacts={this.props.contacts} />
        <ContactView />
      </div>
    )
  }
}