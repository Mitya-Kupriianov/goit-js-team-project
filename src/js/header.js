import { getUser } from './service/index';
import Notiflix from 'notiflix';

const headerMenuList = document.querySelector('.menu__header-js');

headerMenuList.addEventListener('click', onFavClick);

// export function addHeaderListener() {
// }
// export function delHeaderListener() {
//   headerMenuList.removeEventListener('click', onFavClick);
// }


function onFavClick(e) {
  if (!getUser()) {
    Notiflix.Notify.failure('You have to log in!');
    return;
  }
  const refMenu = document.querySelector('.menu__wrap');
  refMenu.classList.toggle('menu__wrap-close');
}

// console.log();

