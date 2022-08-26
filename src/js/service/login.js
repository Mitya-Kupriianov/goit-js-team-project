import { refs } from './hero-refs';
import { signIn, signOutUser } from './index';
import Notiflix from 'notiflix';

refs.buttonLogin.addEventListener('click', onLoginClick);
refs.logInBtn.addEventListener('click', onLoginClick);

export function onLoginClick(event) {
  let id = event.target.dataset.id;
  if (id === 'Log in') {
    signIn();
    Notiflix.Notify.success('You are here, welcome!');
  } else {
    signOutUser();
    Notiflix.Notify.info('You have logged out. See you next time!');
  }
}

export function toggleBtnContent(user) {
  let statusUser = 'Log in';

  if (user) {
    statusUser = 'Log out';
  }

  refs.buttonLogin.textContent = statusUser;
  refs.logInBtn.textContent = statusUser;
  refs.buttonLogin.dataset.id = statusUser;
  refs.logInBtn.dataset.id = statusUser;
}
