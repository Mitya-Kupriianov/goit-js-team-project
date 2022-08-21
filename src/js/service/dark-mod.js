let changeThemeButton = document.querySelector('.js-dark-mod');

changeThemeButton.addEventListener('click', function (e) {
  applyTheme(e.target.checked ? 'dark' : 'light');
});

function applyTheme(themeName) {
  document.querySelector('body').setAttribute('class', `${themeName}`);
  localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme');

if (activeTheme === null || activeTheme === 'light') {
  applyTheme('light');
  changeThemeButton.checked = false;
} else if (activeTheme === 'dark') {
  applyTheme('dark');
  changeThemeButton.checked = true;
}
