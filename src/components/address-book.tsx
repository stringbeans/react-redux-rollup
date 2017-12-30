import * as React from 'react'
import ContactsList from './contacts-list'
import ContactView from './contact-view'

export interface IContact {
  name: string
  phone: string
}

export interface IAddressBookProps {
  contacts: Array<IContact>
}

interface IAddressBookState {
  selectedContact?: IContact
}

export class AddressBook extends React.Component<IAddressBookProps, IAddressBookState> {
  constructor(props: IAddressBookProps) {
    super(props)

    this.state ={
      selectedContact: props.contacts[0]
    }
  }

  selectContact(contact) {
    console.log('selectContact called', contact)
    console.log(this)
    this.setState({
      selectedContact: contact
    })
  }

  render() {
    return (
      <div>
        <ContactsList contacts={this.props.contacts} selectContactFn={this.selectContact.bind(this)} />
        <ContactView contact={this.state.selectedContact} />
      </div>
    )
  }
}