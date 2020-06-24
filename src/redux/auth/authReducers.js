import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from './authActions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.addUserSuccess]: (_, action) => action.payload.user,
  [authActions.getUserSuccess]: (_, action) => action.payload,
  [authActions.loginSuccess]: (_, action) => action.payload.user,
  [authActions.logoutSuccess]: (_, action) => initialUserState,
  [authActions.deleteUserSuccess]: (_, action) => initialUserState,
});

const token = createReducer(null, {
  [authActions.addUserSuccess]: (_, action) => action.payload.token,
  [authActions.loginSuccess]: (_, action) => action.payload.token,
  [authActions.logoutSuccess]: (_, action) => null,
  [authActions.deleteUserSuccess]: (_, action) => null,
});

const error = createReducer(null, {
  [authActions.addUserError]: (_, action) => action.payload,
  [authActions.getUserError]: (_, action) => action.payload,
  [authActions.loginError]: (_, action) => action.payload,
  [authActions.logoutError]: (_, action) => action.payload,
  [authActions.deleteUserError]: (_, action) => action.payload,
  [authActions.removeUserError]: (_, action) => null,
});

export default combineReducers({ user, token, error });
