import * as React from 'react'
import {IContact} from './address-book'

interface IContactsListProps {
  contacts: Array<IContact>
  selectContactFn: Function
  onViewClick: Function //this is from the container
}

export default class ContactsList extends React.Component<IContactsListProps> {
  render() {
    if (this.props.contacts) {
      return (
        <div>
          {
            this.props.contacts.map((contact, i) => {
              return (
                <li key={i}>
                  <a href={`#${i}`} onClick={() => this.props.onViewClick(contact)}>{contact.name}</a>
                </li>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}