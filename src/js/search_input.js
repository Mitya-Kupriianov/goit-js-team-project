import CocktailAPI from './service/getCocktail';
import cardTmpl from '../tmp/random-card.hbs';

import createMarkup from './/service/create-markup';
import {
  createMarkup,
  renderMarkup,
  markupFilter,
} from './/service/create-markup';


const throttle = require('lodash.throttle');
import Notiflix from 'notiflix';

refs = {
  searchForm: document.querySelector('.search__input'),
  loadMoreBtn: document.querySelector('.load__more'),
  cocktailsList: document.querySelector('.cocktails__list'),
};

const cocktailAPI = new CocktailAPI();

refs.searchForm.addEventListener('input', throttle(onSearch, 700));
refs.loadMoreBtn.addEventListener('click', loadMore);

async function onSearch(e) {
  try {
    e.preventDefault();

    cocktailAPI.query = e.target.value.trim('');
    console.log(cocktailAPI.query);

    if (cocktailAPI.query === '') {
      return Notiflix.Notify.failure('Please, enter the name of cocktail');
    }
    cocktailAPI.resetPage();
    const responseSearch = await cocktailAPI.getCocktailByName();
    const markup = createMarkup(responseSearch);
    const filteredMarkup = markupFilter(markup);
    renderMarkup(refs.cocktailsList, filteredMarkup);
  } catch (error) {
    console.log(error.text);
  }
}

function loadMore() {
  cocktailAPI.getCocktailByName();
}
