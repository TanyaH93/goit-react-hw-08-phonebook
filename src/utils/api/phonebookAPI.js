import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const createUser = user => axios.post('/users/signup', user);

const login = user => axios.post('/users/login', user);

const logout = () => axios.post('/users/logout');

const getCurrentUser = () => axios.get('/users/current');

const deleteUserAccount = token => axios.delete('/users/current', token);

const getContacts = () => axios.get('/contacts');

const addContact = contact => axios.post('/contacts', contact);

const deleteContact = id => axios.delete(`/contacts/${id}`);

export default {
  createUser,
  login,
  logout,
  getCurrentUser,
  deleteUserAccount,

  token,

  getContacts,
  addContact,
  deleteContact,
};
