import CocktailAPI from './getCocktail';

import { createRandomMarkup, renderMarkup, addEvents, markupFilter } from './create-markup';
import { getCocktailStorageData } from './localStorage';


const cocktailList = document.querySelector('.cocktails__list');
const cocktailAPI = new CocktailAPI();
const ids = getCocktailStorageData(cocktailAPI.KEY);

export async function createAndRenderRandomMarkup() {

  const array = await cocktailAPI.getRandomCocktail();

  const markup = createRandomMarkup(array);
  const filteredMarkup = markupFilter(markup);
  renderMarkup(cocktailList, filteredMarkup);
  addEvents();

}


window.addEventListener('load', createAndRenderRandomMarkup);
