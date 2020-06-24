import authActions from './authActions';
import phonebookAPI from '../../utils/api/phonebookAPI';

const addUser = user => dispatch => {
  dispatch(authActions.addUserRequest());
  phonebookAPI
    .createUser(user)
    .then(response => {
      phonebookAPI.token.set(response.data.token);
      return dispatch(authActions.addUserSuccess(response.data));
    })
    .catch(error => dispatch(authActions.addUserError(error)));
};

const getUser = () => dispatch => {
  dispatch(authActions.getUserRequest());
  phonebookAPI
    .getCurrentUser()
    .then(response => dispatch(authActions.getUserSuccess(response.data)))
    .catch(error => dispatch(authActions.getUserError(error)));
};

const loginUser = user => dispatch => {
  dispatch(authActions.loginRequest());
  phonebookAPI
    .login(user)
    .then(response => {
      phonebookAPI.token.set(response.data.token);
      return dispatch(authActions.loginSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginError(error)));
};

const logoutUser = () => dispatch => {
  dispatch(authActions.logoutRequest());
  phonebookAPI
    .logout()
    .then(response => {
      phonebookAPI.token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error)));
};

const deleteUser = () => dispatch => {
  dispatch(authActions.deleteUserRequest());
  phonebookAPI
    .deleteUserAccount()
    .then(response => {
      phonebookAPI.token.unset();
      dispatch(authActions.deleteUserSuccess());
    })
    .catch(error => authActions.deleteUserError(error));
};

export default {
  addUser,
  getUser,
  loginUser,
  logoutUser,
  deleteUser,
};
