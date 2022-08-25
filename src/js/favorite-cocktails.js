import { createMarkup, renderMarkup } from './service/create-markup';
import { getCocktailStorageData } from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';
import { refs } from './modal_markup';

const favoriteList = document.querySelector('.cocktails__list');

const favorite = new CocktailAPI();

export async function onFavoriteCocktailsLoad() {
  const data = await getCocktailStorageData(favorite.KEY);
  const drinks = [];
  if (!data) {
    favoriteList.innerHTML = "Sorry, we didn't find any cocktail for you";
  }

  const render = () => {
    const arr = { data: { drinks: drinks } };
    const markup = createMarkup(arr);
    renderMarkup(favoriteList, markup);
  };

  await data?.forEach(async id => {
    const response = await favorite.getCocktailsId(id);
    const cocktail = response.data.drinks;
    if (cocktail.length) drinks.push(...cocktail);
    if (drinks.length === data.length) render();
  });
}

window.addEventListener('load', onFavoriteCocktailsLoad);
