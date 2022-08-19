const headerMenuList= document.querySelector('.menu__header-js');

headerMenuList.addEventListener('click', () => {
  const refMenu = document.querySelector('.menu__wrap ');
  refMenu.classList.toggle('menu__wrap-close');
});