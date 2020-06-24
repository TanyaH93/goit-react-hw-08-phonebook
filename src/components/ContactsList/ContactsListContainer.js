import { connect } from 'react-redux';

import ContactsList from './ContactsList';
import { phonebookSelectors } from '../../redux/phonebook';

const mapStateToProps = state => {
  return {
    filteredContacts: phonebookSelectors.getVisibleContacts(state),
  };
};

export default connect(mapStateToProps)(ContactsList);
