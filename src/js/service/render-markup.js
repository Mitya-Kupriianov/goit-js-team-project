import CocktailAPI from './getCocktail';
import { createRandomMarkup, renderMarkup, addEvents } from './create-markup';
import { getCocktailStorageData } from './localStorage';

const cocktailList = document.querySelector('.cocktails__list');
const cocktailAPI = new CocktailAPI();
const ids = getCocktailStorageData(cocktailAPI.KEY);

export async function createAndRenderRandomMarkup() {
  const arr = await cocktailAPI.getRandomCocktail();
  // const ids = getCocktailStorageData(cocktailAPI.KEY);

  const markup = createRandomMarkup(arr);
  renderMarkup(cocktailList, markup);
  addEvents();
}


window.addEventListener('load', createAndRenderRandomMarkup);
