const contact = (state = {}, action) => {
  switch (action.type) {
    case 'VIEW_CONTACT':
      console.log(`reducer called for ${action.type}`, action, state)
      return {
        contact: action.contact
      }
    default:
      return {
        contact: undefined
      }
  }
}

export default contact