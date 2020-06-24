import { createAction } from '@reduxjs/toolkit';

const addUserRequest = createAction('auth/addRequest');
const addUserSuccess = createAction('auth/addSuccess');
const addUserError = createAction('auth/addError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getUserRequest = createAction('auth/getRequest');
const getUserSuccess = createAction('auth/getSuccess');
const getUserError = createAction('auth/getError');

const deleteUserRequest = createAction('auth/deleteRequest');
const deleteUserSuccess = createAction('auth/deleteSuccess');
const deleteUserError = createAction('auth/deleteError');

const removeUserError = createAction('auth/removeError');

export default {
  addUserRequest,
  addUserSuccess,
  addUserError,

  loginRequest,
  loginSuccess,
  loginError,

  logoutRequest,
  logoutSuccess,
  logoutError,

  getUserRequest,
  getUserSuccess,
  getUserError,

  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,

  removeUserError,
};
