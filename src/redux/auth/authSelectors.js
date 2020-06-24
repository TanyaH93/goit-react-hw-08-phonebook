const getToken = state => state.auth.token;

const getName = state => state.auth.user.name;

const isAuthenticated = state => Boolean(state.auth.token);

const userError = state => state.auth.error;

export default { getToken, getName, isAuthenticated, userError };
