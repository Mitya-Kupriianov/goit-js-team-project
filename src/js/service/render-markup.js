import CocktailAPI from './getCocktail';
import { createRandomMarkup, renderMarkup, addEvents } from './create-markup';
import { getCocktailStorageData } from './localStorage';

import { refs } from './hero-refs';

const { imgRef } = refs;

const cocktailList = document.querySelector('.cocktails__list');
const cocktailAPI = new CocktailAPI();

export async function createAndRenderRandomMarkup() {
  const arr = await cocktailAPI.getRandomCocktail();
  const ids = getCocktailStorageData(cocktailAPI.KEY);

  const markup = createRandomMarkup(arr, ids);
  renderMarkup(cocktailList, markup);
  addEvents();
  toToggleAddToBtn();
}

export function toToggleAddToBtn() {
  const addToFavBtn = document.querySelectorAll('.js-add-btn');

  addToFavBtn.forEach(item => {
    // const imgRef = item.querySelector('.img');
    // console.log(item);
    item.addEventListener('click', function () {
      item.classList.toggle('activated');
    });
  });
}
// export function toToggleAddToBtn() {
//   const addToFavBtn = document.querySelectorAll('.js-add-btn');

//   addToFavBtn.forEach(item => {
//     const imgRef = item.querySelector('.img');
//     // console.log(item);
//     item.addEventListener('click', function () {
//       imgRef.classList.toggle('hidden-heart');
//     });
//   });
// }

window.addEventListener('load', createAndRenderRandomMarkup);
