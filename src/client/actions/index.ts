export const viewContact = contact => {
  console.log('viewContact action triggered')
  return {
    type: 'VIEW_CONTACT',
    contact
  }
}
