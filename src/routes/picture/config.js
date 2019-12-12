import Main from '../../pages/main';
import History from '../../pages/history';

export const main = {
  path: '/',
  exact: true,
  component: Main,
  name: 'Главная'
}

export const history = {
  path: '/history',
  exact: true,
  component: History,
  name: 'История'
}