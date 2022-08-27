import { createRandomMarkup, renderMarkup } from './service/create-markup';
import { getCocktailStorageData } from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';
// import { refs } from './modal_markup';

const favoriteList = document.querySelector('.cocktails__list');

const favorite = new CocktailAPI();

export function onFavoriteCocktailsLoad() {
  const data = getCocktailStorageData(favorite.KEY);
  // console.log(data);
  if (!data) {
    favoriteList.innerHTML = "Sorry, we didn't find any cocktail for you";
  }
  toCountAndRenderIngr(data);
}

function render(data) {
  // console.log(data);
  const markup = createRandomMarkup(data);
  // console.log(markup);
  renderMarkup(favoriteList, markup);
}

async function toCountAndRenderIngr(data) {
  const drinks = [];
  console.log(data);
  data.forEach(id => {
    const response = favorite.getCocktailsId(id);
    drinks.push(response);
    // console.log(drinks);
  });
  Promise.all(drinks).then(render);
}

window.addEventListener('load', onFavoriteCocktailsLoad);
