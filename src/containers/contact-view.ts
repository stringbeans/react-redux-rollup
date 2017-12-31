import { connect } from 'react-redux'
// import { viewContact } from '../actions'
import ContactView from '../components/contact-view'

const mapStateToProps = state => {
  console.log('mapStateToProps called in contact-view container', state)
  return {
    contact: state.contact
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ContactViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactView)

export default ContactViewContainer