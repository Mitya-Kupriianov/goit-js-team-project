import CocktailAPI from './getCocktail';
import {
  createRandomMarkup,
  renderMarkup,

  markupFilter,

  addEvents,
  addFavoriteEvents,

} from './create-markup';

const cocktailList = document.querySelector('.cocktails__list');
const cocktailAPI = new CocktailAPI();

export async function createAndRenderRandomMarkup() {
  const array = await cocktailAPI.getRandomCocktail();


  //const markup = createRandomMarkup(array);
  //const filteredMarkup = markupFilter(markup);
  //renderMarkup(cocktailList, filteredMarkup);

  const markup = createRandomMarkup(arr);
  renderMarkup(cocktailList, markup);
  addEvents();
  addFavoriteEvents();
}

window.addEventListener('load', createAndRenderRandomMarkup);
