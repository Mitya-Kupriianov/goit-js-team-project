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
// import { onIngredientClick } from '../js/modal_markup';

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
  const FavListRef = document.querySelector('.favorite__list-card');
  FavListRef.addEventListener('click', onRemoveIngrBtnClick);
  FavListRef.addEventListener('click', onIngredientClick);
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
      <li class="favorite__list-item cocktails__item card-set-item">
      <p class="favorite__list-name">${strIngredient}</p>
      <p class="favorite__list-type">${strType}</p>
      <div class="favorite__btn-wrap">
        <button
              type="button"
              class="js-split cocktails__btn cocktails__button-text"
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

// -----------------------Fignya----------------------------------
async function onIngredientClick(e) {
  try {
    const btn = e.target.closest('.js-split ');
    const ingredient = e.target.textContent;
    const responseIngredient = await favorite.getCocktailByIngredient(
      ingredient
    );
    const ingredientsContainer = document.querySelector(
      '.inner-modal-container'
    );
    const markup = createIngredientsMarkup(responseIngredient);
    renderMarkup(ingredientsContainer, markup);
    document
      .querySelector('[data-inner-modal-button]')
      .addEventListener('click', onClickInnerModal);

    const backdrop = document.querySelector('[data-inner-modal]');

    backdrop.classList.remove('is-hidden-inner-modal');
  } catch (error) {
    throw new Error(error.message);
  }
}

function createIngredientsMarkup(ingredients) {
  // console.log(ingredients);
  return ingredients.data.ingredients
    .map(ingredient => {
      return `<div class="ingredient-modal-wrap">
  <img class="ingredient-modal-pic" src='https://www.thecocktaildb.com/images/ingredients/${
    ingredient.strIngredient
  }-Small.png'
  alt=${ingredient.strIngredient}></div>
      <div inner-modal-container dark--modal-back"><div class="ingr-modal-title-wrapper">
  <h3 class="inner-modal-name dark--title">${toIdentifyStrType(ingredient)}</h3>
  <h4 class="inner-modal-passage dark--text">
    ${ingredient.strIngredient}

  </h4>
  <div class="border"></div>
</div>
<div class="modal-ingredients-desc">

<p class="inner-modal-text dark--text">
  ${toMakeDescriptionText(ingredient)}
</p>
<ul class="ingredients-modal-list">

  <li class="inner-modal-ingredients dark--text"">
    ✶ <b>Type</b>: ${toIdentifyStrType(ingredient)}
  </li>
  <li class="inner-modal-ingredients dark--text">
    ✶ <b>Country of origin</b>: Sorry, not specified
  </li>
  <li class="inner-modal-ingredients dark--text">✶ <b>Alcohol</b> : ${
    ingredient.strAlcohol
  }</li>

</ul>
</div>
<button id=${
        ingredient.idIngredient
      } type="button" data-inner-modal-button class="cocktails__button-text ingredients-modal-btn cocktails__btn dark--btn-back transparent ${shouldBeActivated(
        ingredient.idIngredient,
        'ingredients'
      )}">Add to  
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>`;
    })
    .join('');
}
