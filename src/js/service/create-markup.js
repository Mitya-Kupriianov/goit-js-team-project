
import * as noResults from '../../images/notice/notice.png';
import * as noResults2x from '../../images/notice/notice@2x.png';

export function createMarkup(array) {
  return array.data.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => {
    return `
       li class="cocktails__item card-set-item">


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
               data-id=${idDrink}
            >
              <span class="cocktails__button-text" id=${idDrink} >Learn more</span>
            </button>
            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent" data-id=${idDrink}>
              <span class="cocktails__button-text">Add to</span>



           

              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 


            </button>
          </div>
        </div>
      </li>`;
     });
}

const favorite = new CocktailAPI();

import { refs } from './hero-refs';

const { addToFavBtn, imgRef, RemoveCocktailBtnRef } = refs;
const cocktailList = document.querySelector('.cocktails__list');

export function createMarkup(arr) {
  return arr.data.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => {
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
               data-id=${idDrink}
            >
              <span class="cocktails__button-text" id=${idDrink} >Learn more</span>
            </button>
            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent" data-id=${idDrink}>
              <span class="cocktails__button-text">Add to</span>



           

              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 


            </button>
          </div>
        </div>
      </li>`;
  });
}

export function renderMarkup(element, markup) {
  element.innerHTML = markup;
}

// Click on "Add to Favorites button"

function onAddBtnClick(e) {
  const btn = e.target.closest('.js-add-btn');
  // console.dir(btn);
  if (btn) {
    const data = getCocktailStorageData(favorite.KEY);
    console.log(btn);
    console.log(data);
    if (!data) {
      btn.classList.add('activated');
      setCocktailToLocalStorage(btn.dataset.id);
    }
    if (data.includes(btn.dataset.id)) {
      return alert('This cocktail is already included!');
    } else {
      btn.classList.add('activated');
      setCocktailToLocalStorage(btn.dataset.id);
    }
  }
}

export function createRandomMarkup(arr) {
  return arr.map(item => {
    const { strDrink, strDrinkThumb, idDrink } = item.data.drinks[0];
    return `

      <li class="cocktails__item card-set-item ">

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
               data-id=${idDrink}
            >
              <span class="cocktails__button-text" id=${idDrink} >Learn more</span>
            </button>



              <span class="cocktails__button-text">Add to</span>
           

            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent" data-id="${idDrink}">
              <span class="cocktails__button-text">Add to</span>  
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 



            </button>
          </div>
        </div>
      </li>`;
  });
}

export function markupFilter(markup) {
  if (window.screen.width < 768) {
    return markup.filter((_, index) => index < 3).join('');
  } else if (window.screen.width >= 768 && window.screen.width < 1280) {
    return markup.filter((_, index) => index < 6).join('');

  }
  return markup.filter((_, index) => index < 9).join('');
}

export function noResultsMarkup() {
  return `<img class="no-result" srcset = "${noResults}", srcset =  "${noResults2x}" src="${noResults2x}" alt="No Results"></img>`;

  } else return markup.filter((_, index) => index < 9).join('');

}

// Listeners

cocktailList.addEventListener('click', onAddBtnClick);

// /* <img class="img ${
//      isChecked ? 'full-heart' : 'empty-heart'
//      }" data-toggle="hidden-hearFt" src="${fullHeart}" alt="" width="18" height="18"/>
//      <img class="img ${
//      !isChecked ? 'empty-heart' : 'full-heart'
//      }" data-toggle="empty-heart" src="${emptyHeart} " alt="" width="18" height="18"/>*/
