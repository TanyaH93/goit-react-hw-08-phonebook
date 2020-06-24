import { connect } from 'react-redux';

import ContactsListItem from './ContactsListItem';
import { phonebookSelectors, phonebookOperations } from '../../redux/phonebook';

const mapStateToProps = (state, ownProps) => {
  const item = phonebookSelectors.getContactById(state, ownProps.id);
  return { ...item };
};

export default connect(mapStateToProps, {
  deleteContact: phonebookOperations.deleteContact,
})(ContactsListItem);
