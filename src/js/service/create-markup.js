import CocktailAPI from './getCocktail';
import { setCocktailToLocalStorage } from './localStorage';
import { toToggleAddToBtn } from './render-markup';
import emptyHeart from '../../images/hearts/empty-heart.png';
import fullHeart from '../../images/hearts/full-heart.png';

const favorite = new CocktailAPI();

import { refs } from './hero-refs';

const { addToFavBtn, imgRef, RemoveCocktailBtnRef } = refs;
const cocktailList = document.querySelector('.cocktails__list');

export function createMarkup(arr) {
  return arr.data.drinks
    .map(({ strDrink, strDrinkThumb, idDrink }) => {
      return `
      <li class="cocktails__item card-set-item">
        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
        />
        <div class="cocktails__box">
          <h2 class="cocktails__second-title dark--title">${strDrink}</h2>
          <div class="cocktails__button-box" id=${idDrink}>
            <button
              type="button"
              class="cocktails__btn"
              data-modal-cocktail-open
            >
              <span class="cocktails__button-text">Learn more</span>
            </button>
            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent">
              <span class="cocktails__button-text">Add to</span>
              // <svg class="cocktails__btn-icon" width="18" height="18">
              //   <use href="./images/icon.svg#icon-redlike"></use>
              // </svg>
            </button>
          </div>
        </div>
      </li>`;
    })
    .join('');
}

export function renderMarkup(element, markup) {
  element.innerHTML = markup;
}

export function addEvents() {
  console.log('addEvents');
  const refs = {
    modalOpenBtn: document.querySelectorAll('[data-modal-cocktail-open]'),
    backdrop: document.querySelector('[data-modal]'),
  };
  refs.modalOpenBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      refs.backdrop.classList.remove('is-hidden-modal-coctails');
    });
  });
}

// Click on "Add to Favorites button"

function onAddBtnClick(e) {
  const btn = e.target.closest('.js-add-btn');
  console.dir(btn);
  if (btn) {
    setCocktailToLocalStorage(btn.dataset.id);
  }
}

// function onRemoveBtnClick(e) {
//   const btn = e.target.closest('.js-remove');
//   console.log(btn);
//   if (btn) {
//     setCocktailToLocalStorage(btn.dataset.id);
//   }
// }

console.log('cocktailList :>> ', cocktailList);

export function createRandomMarkup(arr, arrIds) {
  return arr
    .map(item => {
      const { strDrink, strDrinkThumb, idDrink } = item.data.drinks[0];
      // const isChecked = arrIds.includes(idDrink);
      // if (!isChecked) {
      //   imgRef.classList.toggle('hidden-heart');
      // }
      return `
      <li class="cocktails__item card-set-item">
        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
        />
        <div class="cocktails__box">

          <h2 class="cocktails__second-title">${strDrink}</h2>
          <div class="cocktails__button-box">

            <button
              type="button"
              class="cocktails__btn"
              data-modal-cocktail-open
            >
              <span class="cocktails__button-text">Learn more</span>
            </button>
            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent" data-id="${idDrink}">
              <span class="cocktails__button-text">Add to</span>  
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>
          </div>
        </div>
      </li>`;
    })
    .join('');
}

export function markupFilter(markup) {
  if (window.screen.width < 768) {
    const markupFiltered = markup.filter((_, index) => index <= 3);
    return markupFiltered.join('');
  } else if (window.screen.width >= 768 && window.screen.width < 1280) {
    const markupFiltered = markup.filter((_, index) => index <= 6);
    return markupFiltered.join('');
  }
  const markupFiltered = markup.filter((_, index) => index <= 9);
  return markupFiltered.join('');
}

// Listeners

cocktailList.addEventListener('click', onAddBtnClick);

console.log(imgRef);
// // console.log(refs);

{
  /* <img class="img ${
     isChecked ? 'hidden-heart' : ''
     }" data-toggle="hidden-hearFt" src="${fullHeart}" alt="" width="18" height="18"/>
     <img class="img ${
     !isChecked ? 'hidden-heart' : ''
     }" data-toggle="empty-heart" src="${emptyHeart} " alt="" width="18" height="18"/>*/
}
