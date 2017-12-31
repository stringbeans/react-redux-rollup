import { connect } from 'react-redux'
import { viewContact } from '../actions'
import ContactsList from '../components/contacts-list'

const mapStateToProps = state => {
  console.log('mapStateToProps called in contacts-list container')
  return {
    contact: state.contact
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onViewClick: contact => {
      console.log('onViewClick called!', contact)
      dispatch(viewContact(contact))
    }
  }
}

const ContactsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsList)

export default ContactsListContainer