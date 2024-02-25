const API_URL = 'http://localhost:4000';

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  PROJECTS: `${API_URL}/api/projects`,
  USER: `${API_URL}/api/user`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  HOME: '/',
  PERSONAL_SPACE: '/Espace-personnel',
};