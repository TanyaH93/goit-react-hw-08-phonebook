import { connect } from 'react-redux';

import Notification from './Notification';
import { authSelectors, authActions } from '../../redux/auth';
import { phonebookActions, phonebookSelectors } from '../../redux/phonebook';

const mapStateToProps = state => {
  return {
    userError: authSelectors.userError(state),
    contactsError: phonebookSelectors.contactsError(state),
  };
};
export default connect(mapStateToProps, {
  removeUserError: authActions.removeUserError,
  removeContactsError: phonebookActions.removeContactsError,
})(Notification);
