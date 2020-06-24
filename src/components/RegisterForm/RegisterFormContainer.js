import { connect } from 'react-redux';

import RegisterForm from './RegisterForm';
import { authOperations } from '../../redux/auth';

export default connect(null, { addUser: authOperations.addUser })(RegisterForm);
