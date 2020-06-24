const routesList = {
  HOME: '/',
  REGISTER: '/register',
  LOGIN: '/login',
  CONTACTS: '/contacts',
};

const parameters = [
  { path: '/', name: 'Home', exact: true, private: false, restricted: false },
  {
    path: '/register',
    name: 'Register',
    exact: false,
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    private: false,
    restricted: true,
  },
  { path: '/contacts', name: 'Contacts', exact: false, private: true },
];

export { routesList, parameters };
