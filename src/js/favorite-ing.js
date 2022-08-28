import {
  getCocktailStorageData,
  removeFromLocalStorage,
} from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';
import { onError } from '../js/service/notification';
import emptyHeart from '../images/hearts/empty-heart.png';
import fullHeart from '../images/hearts/full-heart.png';
import * as noResults from '../images/notice/notice.png';
import * as noResults2x from '../images/notice/notice@2x.png';
import Notiflix from 'notiflix';

// console.log(1111);
const favorite = new CocktailAPI();
const favoriteListRef = document.querySelector('.favorite__list-card');

export function onFavoriteIngredientsLoad() {
  const data = getCocktailStorageData(favorite.INGREDIENTS);
  // console.log(data);
  if (!data) {
    onError();
    favoriteListRef.innerHTML = noResultsMarkup();
  }
  toCountAndRenderIngredient(data);
  document
    .querySelector('.favorite__list-card')
    .addEventListener('click', onRemoveIngrBtnClick);
}

function render(data) {
  // console.log(data);
  const markup = createCards(data);
  // console.log(markup);
  renderMarkupIngred(favoriteListRef, markup);
}

async function toCountAndRenderIngredient(data) {
  const ingredients = [];
  // console.log(data);
  data.forEach(iid => {
    const response = favorite.getIngredientById(iid);
    ingredients.push(response);
    // console.log(drinks);
  });
  Promise.all(ingredients).then(render);
}

export function createFavoriteIngredientsMarkup({
  strIngredient,
  strType,
  idIngredient,
}) {
  return /*html*/ `
      <li class="favorite__list-item card-set-item">
      <p class="favorite__list-name">${strIngredient}</p>
      <p class="favorite__list-type">${strType}</p>
      <div class="favorite__btn-wrap">
        <button
              type="button"
              class="cocktails__btn cocktails__button-text"
              data-modal-ingredient-open
               data-id=${idIngredient}
            >Learn more
            </button>
            <button type="button" class="cocktails__button-text cocktails__btn dark--btn-back js-remove-btn transparent ${shouldBeActive(
              idIngredient,
              'ingredients'
            )}" data-id="${idIngredient}">Remove
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>
      </div>
    </li>`;
}

window.addEventListener('load', onFavoriteIngredientsLoad);

//          ---------------Function Copies :(-------------------

function shouldBeActive(id, payLoad) {
  const data = getCocktailStorageData(payLoad);
  if (data) {
    return localStorage.getItem(payLoad).includes(id) ? 'activated' : '';
  } else {
    return;
  }
}

function createCards(arr) {
  // console.log(arr);
  return arr.map(item =>
    createFavoriteIngredientsMarkup(item.data.ingredients[0])
  );
}

function noResultsMarkup() {
  return `<li class="garcon"> Sorry, we didn't find any ingredient for you<img class="no-result" srcset = "${noResults}", srcset =  "${noResults2x}" src="${noResults2x}" alt="No Results"></img></li>`;
}

function renderMarkupIngred(element, markup) {
  element.innerHTML = markup;
}

function onRemoveIngrBtnClick(e) {
  // console.log(e);
  const btn = e.target.closest('.js-remove-btn');
  // console.log(btn);
  const data = getCocktailStorageData(favorite.INGREDIENTS);
  // console.log(data);
  const id = e.target.dataset.id;
  // console.log(id);
  if (btn) {
    if (data.includes(id)) {
      Notiflix.Notify.failure('Ingredient was removed from Your favourites!');
      removeFromLocalStorage(id, 'ingredients');
      btn.classList.remove('activated');
    } else {
      Notiflix.Notify.success(
        'Ingredient was added to Your favourites, Congrats!'
      );
      btn.classList.add('activated');

      setCocktailToLocalStorage(id, 'ingredients');
    }
  }
}
