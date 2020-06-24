import { connect } from 'react-redux';

import LogInForm from './LogInForm';
import { authOperations } from '../../redux/auth';

export default connect(null, { logIn: authOperations.loginUser })(LogInForm);
