import { createMarkup, renderMarkup } from './service/create-markup';
import { getCocktailStorageData } from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';
import { refs } from './modal_markup';

refs = {
  favoriteList: document.querySelector('.cocktails__list'),
};
const favorite = new CocktailAPI();

export async function onFavoriteCocktailsLoad() {
  const data = await getCocktailStorageData(favorite.KEY);
  const drinks = [];
  const list = document.querySelector('.cocktails__list');
  if (!data) {
    list.innerHTML = "Sorry, we didn't find any cocktail for you";
  }

  const render = () => {
    const arr = { data: { drinks: drinks } };
    const markup = createMarkup(arr);
    renderMarkup(list, markup);
  };

  await data?.forEach(async id => {
    const response = await favorite.getCocktailsId(id);
    const cocktail = response.data.drinks;
    if (cocktail.length) drinks.push(...cocktail);
    if (drinks.length === data.length) render();
  });
}

window.addEventListener('load', onFavoriteCocktailsLoad);
