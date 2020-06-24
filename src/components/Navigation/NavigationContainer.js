import { connect } from 'react-redux';

import Navigation from './Navigation';
import { authSelectors } from '../../redux/auth';

const mapStateToProps = state => {
  return { isAuthenticated: authSelectors.isAuthenticated(state) };
};

export default connect(mapStateToProps)(Navigation);
