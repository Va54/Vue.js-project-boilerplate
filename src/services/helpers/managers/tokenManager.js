import jwtDecode from 'jwt-decode';

const manager = {};

manager.setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

manager.getAuthToken = () => {
  return localStorage.getItem('token');
};

manager.getDecodedToken = () => {
  const token = manager.getAuthToken();
  return jwtDecode(token);
};
manager.isAuthTokenValid = () => {
  const authToken = localStorage.getItem('token');
  return authToken && manager.isTokenValid(authToken);
};

manager.isTokenValid = (token) => {
  const tokenDecoded = jwtDecode(token);
  const tokenExpirationDate = new Date(tokenDecoded.exp * 1000);
  return Date.now() < tokenExpirationDate;
};

manager.logout = () => {
  localStorage.removeItem('token');
};

export default manager;
