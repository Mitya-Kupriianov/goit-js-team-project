import CocktailAPI from './service/getCocktail';
import cardTmpl from '../tmp/random-card.hbs';
import createMarkup from './/service/create-markup';
const throttle = require('lodash.throttle');

refs = {
  searchForm: document.querySelector('.search__input'),
  loadMoreBtn: document.querySelector('.load__more'),
  cocktailsList: document.querySelector('.cocktails__list'),
};

const cocktailAPI = new CocktailAPI();

refs.searchForm.addEventListener('input', throttle(onSearch, 700));
refs.loadMoreBtn.addEventListener('click', loadMore);

function onSearch(e) {
  e.preventDefault();

  cocktailAPI.query = e.target.value.trim('');
  console.log(cocktailAPI.query);

  if (!cocktailAPI.query) {
    alert('notify alert');
  }
  cocktailAPI.resetPage();
  cocktailAPI.getCocktailByName().then(appendToMarkup);
}

function appendToMarkup(drinks) {
  const markup = cardTmpl(drinks);
  refs.cocktailsList.innerHTML = markup;
}

function loadMore() {
  cocktailAPI.getCocktailByName();
}
