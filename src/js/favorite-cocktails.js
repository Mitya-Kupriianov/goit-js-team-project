import { createMarkup, renderMarkup } from './service/create-markup';
import { getCocktailStorageData } from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';
import { refs } from './modal_markup';

const favoriteList = document.querySelector('.cocktails__list');

const favorite = new CocktailAPI();

export function onFavoriteCocktailsLoad() {
  const data = getCocktailStorageData(favorite.KEY);
  if (!data) {
    favoriteList.innerHTML = "Sorry, we didn't find any cocktail for you";
  }
  toCountAndRenderIngr(data);
}

function render(data) {
  console.log(data);
  const markup = createMarkup(data);
  console.log(markup);
  renderMarkup(favoriteList, markup);
}

async function toCountAndRenderIngr(data) {
  const drinks = [];
  console.log(data);
  data.forEach(id => {
    const response = favorite.getCocktailsId(id);

    drinks.push(response);
  });
  Promise.all(drinks).then(render);
}

window.addEventListener('load', onFavoriteCocktailsLoad);
