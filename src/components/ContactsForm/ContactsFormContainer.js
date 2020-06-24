import { connect } from 'react-redux';

import {
  phonebookOperations,
  phonebookSelectors,
  phonebookActions,
} from '../../redux/phonebook';

import ContactsForm from './ContactsForm';

const mapStateToProps = state => {
  return {
    list: phonebookSelectors.getAllContacts(state),
  };
};

export default connect(mapStateToProps, {
  newContact: phonebookOperations.addContact,
  duplicatedContactError: phonebookActions.addContactError,
})(ContactsForm);
