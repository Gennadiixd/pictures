import { fromJS } from "immutable";

export const history = fromJS([
  {
    pictureUrl: 'https://memepedia.ru/wp-content/uploads/2017/04/1485203209123426618-2.jpg',
    importDateTime: new Date(),
    title: '',
  }
]);

export const error = {
  pictureUrl: 'https://kuwaitlifestyleblog.files.wordpress.com/2016/07/windows_bug6-100581894-primary-idge.jpg?w=608&h=405',
  importDateTime: new Date(),
  title: 'Smth goes wrong!!!',
}