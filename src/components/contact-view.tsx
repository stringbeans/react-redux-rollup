import * as React from 'react'
import {IContact} from './address-book'


interface IContactViewProps {
  contact?: IContact
}

export default class ContactView extends React.Component<IContactViewProps> {
  render() {
    return (
      <div>
        <h2>Contact Details</h2>
        <div>Name: {this.props.contact.name}</div>
        <div>Phone {this.props.contact.phone}</div>
      </div>
    )
  }
}