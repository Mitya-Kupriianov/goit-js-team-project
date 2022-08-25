import CocktailAPI from './getCocktail';
import {
  setCocktailToLocalStorage,
  getCocktailStorageData,
  removeFromLocalStorage,
} from './localStorage';
import emptyHeart from '../../images/hearts/empty-heart.png';
import fullHeart from '../../images/hearts/full-heart.png';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const favorite = new CocktailAPI();

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
            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent ${shouldBeActivated(
              idDrink
            )}" data-id="${idDrink}">
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

//              -------Click on "Add to Favorites button"-------

function onAddBtnClick(e) {
  const btn = e.target.closest('.js-add-btn');
  const data = getCocktailStorageData(favorite.KEY);
  const id = btn.dataset.id;
  // console.log('data', data);
  if (btn) {
    // console.dir('btn', btn);
    if (!data) {
      btn.classList.add('activated');
      setCocktailToLocalStorage(id);
    }
    if (data.includes(id)) {
      Notify.failure('Cocktail was deleted from favourites!');
      removeFromLocalStorage(id);
      btn.classList.remove('activated');
    } else {
      Notify.success('Cocktail was added to favourites, Congrats!');
      btn.classList.add('activated');
      setCocktailToLocalStorage(id);
    }
  }
}

export function createRandomMarkup(arr) {
  return arr.map(item => {
    const { strDrink, strDrinkThumb, idDrink } = item.data.drinks[0];
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
            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent ${shouldBeActivated(
              idDrink
            )}" data-id="${idDrink}">

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
  } else return markup.filter((_, index) => index < 9).join('');
}

//                  --------Listeners--------

cocktailList.addEventListener('click', onAddBtnClick);

export function noResultsMarkup() {
  return `<img class="no-result" srcset = "${noResults}", srcset =  "${noResults2x}" src="${noResults2x}" alt="No Results"></img>`;
}
function shouldBeActivated(id) {
  const data = getCocktailStorageData(favorite.KEY);
  if (data) {
    return localStorage.getItem('cocktails').includes(id) ? 'activated' : '';
  } else {
    return;
  }
}
