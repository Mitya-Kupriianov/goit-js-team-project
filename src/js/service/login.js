import { refs } from './hero-refs';
import { signIn, signOutUser, getUser, onAuthStateChanged } from './index';

refs.buttonLogin.addEventListener('click', onLoginClick);
refs.loginHeaderBtn.addEventListener('click',onLoginClick)

console.log('11111 :>> ', 11111);
// console.log();
function onLoginClick(event) {
  let id = event.target.dataset.id;
  console.dir(event);
  if (id === 'Log in') {
    signIn();
  } else {
    signOutUser();
  }
}

export function toggleBtnContent(user) {
  let statusUser = 'Log in';
  if (user) {
    statusUser = 'Log out';
  }
  refs.buttonLogin.textContent = statusUser;
  refs.buttonLogin.dataset.id = statusUser;
}
