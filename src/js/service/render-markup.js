import CocktailAPI from './getCocktail';
import { createRandomMarkup, renderMarkup } from './create-markup';

const cocktailList = document.querySelector('.cocktails__list');

const cocktailAPI = new CocktailAPI();

export async function createAndRenderRandomMarkup() {
  const arr = await cocktailAPI.getRandomCocktail();

  const markup = createRandomMarkup(arr);
  renderMarkup(cocktailList, markup);
}

window.addEventListener('load', createAndRenderRandomMarkup);
