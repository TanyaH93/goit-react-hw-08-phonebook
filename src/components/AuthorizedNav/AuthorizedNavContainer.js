import { connect } from 'react-redux';

import AuthorizedNav from './AuthorizedNav';
import { authOperations, authSelectors } from '../../redux/auth';

const mapStateToProps = state => {
  return { userName: authSelectors.getName(state) };
};

export default connect(mapStateToProps, {
  logOut: authOperations.logoutUser,
  deleteUser: authOperations.deleteUser,
})(AuthorizedNav);
