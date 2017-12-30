import * as React from 'react'
import {IContact} from './address-book'

interface IContactsListProps {
  contacts: Array<IContact>
  selectContactFn: Function
}

export default class ContactsList extends React.Component<IContactsListProps> {
  render() {
    return (
      <div>
        {
          this.props.contacts.map((contact, i) => {
            return (
              <li key={i}>
                <a href={`#${i}`} onClick={() => this.onClick(i)}>{contact.name}</a>
              </li>
            )
          })
        }
      </div>
    )
  }

  onClick(contactIndex) {
    this.props.selectContactFn(this.props.contacts[contactIndex])
  }
}