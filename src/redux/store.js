import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import phonebookReducers from './phonebook/phonebookReducers';
import authReducers from './auth/authReducers';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  serialize: true,
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducers),
    phonebook: phonebookReducers,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export { store };

export const persistor = persistStore(store);
