const API_URL = 'portfolio-production-3092.up.railway.app';

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  PROJECTS: `${API_URL}/api/projects`,
  USER: `${API_URL}/api/user`,
  MAIL: `${API_URL}/api/mail`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  HOME: '/',
  PERSONAL_SPACE: '/Espace-personnel',
};
