import { connect } from 'react-redux';

import PublicRoute from './PublicRoute';
import { authSelectors } from '../../redux/auth';

const mapStateToProps = state => {
  return { isAuthenticated: authSelectors.isAuthenticated(state) };
};

export default connect(mapStateToProps)(PublicRoute);
