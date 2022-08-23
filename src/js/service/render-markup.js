import CocktailAPI from './getCocktail';
import { createRandomMarkup, renderMarkup, addEvents } from './create-markup';
import { getCocktailStorageData } from './localStorage';

const cocktailList = document.querySelector('.cocktails__list');
const cocktailAPI = new CocktailAPI();
const ids = getCocktailStorageData(cocktailAPI.KEY);

export async function createAndRenderRandomMarkup() {
  const arr = await cocktailAPI.getRandomCocktail();
  // const ids = getCocktailStorageData(cocktailAPI.KEY);

  const markup = createRandomMarkup(arr, ids);
  renderMarkup(cocktailList, markup);
  addEvents();
  toToggleAddToBtn();
}

export function toToggleAddToBtn() {
  const addToFavBtn = document.querySelectorAll('.js-add-btn');

  addToFavBtn.forEach(item => {
    item.addEventListener('click', function () {
      item.classList.toggle('activated');
    });
    // console.dir(addToFavBtn.dataset.id);
  });
  // if (ids.includes(addToFavBtn.dataset.id)) {
  //   item.classList.add('activated');
  // }
  // else {
  //   item.classList.remove('activated');
  // }
}

window.addEventListener('load', createAndRenderRandomMarkup);
