import { connect } from 'react-redux';

import Filter from './Filter';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

const mapStateToProps = state => {
  return {
    filterFromState: phonebookSelectors.getPhonebookFilter(state),
  };
};

export default connect(mapStateToProps, {
  sendFilter: phonebookOperations.filterContacts,
})(Filter);
