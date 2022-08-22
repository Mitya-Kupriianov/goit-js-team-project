import CocktailAPI from './getCocktail';
import {
  createRandomMarkup,
  renderMarkup,
  addEvents,
  addFavoriteEvents,
} from './create-markup';

const cocktailList = document.querySelector('.cocktails__list');
const cocktailAPI = new CocktailAPI();

export async function createAndRenderRandomMarkup() {
  const arr = await cocktailAPI.getRandomCocktail();

  const markup = createRandomMarkup(arr);
  renderMarkup(cocktailList, markup);
  addEvents();
  addFavoriteEvents();
}
export function addCocktailsToArrayLS(arr) {
  addFavoriteEvents(cocktailAPI.favoriteDrinks).JSON.stringify(arr);
}
window.addEventListener('load', createAndRenderRandomMarkup);
