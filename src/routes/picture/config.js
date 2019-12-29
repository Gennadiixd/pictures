import Main from '../../pages/main';
import History from '../../pages/history';
// If you need page name in main layout add page name to page-helper
export const main = {
  path: '/',
  exact: true,
  component: Main,
  name: 'Главная',
};

export const history = {
  path: '/history',
  exact: true,
  component: History,
  name: 'История',
};