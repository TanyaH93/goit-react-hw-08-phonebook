import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import { authSelectors } from '../../redux/auth';

const mapStateToProps = state => {
  return { isAuthenticated: authSelectors.isAuthenticated(state) };
};

export default connect(mapStateToProps)(PrivateRoute);
