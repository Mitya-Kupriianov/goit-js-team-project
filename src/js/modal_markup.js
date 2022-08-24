export const refs = {
  cocktailsList: document.querySelector('.cocktails__list'),
  backdrop: document.querySelector('[data-modal]'),
  modalOpenBtn: document.querySelectorAll('[data-modal-cocktail-open]'),
  modalContainer: document.querySelector('.modal-coctails '),
};

console.log(refs);

import CocktailAPI from './service/getCocktail';
import { renderMarkup } from './service/create-markup';
function createModalMarkup(response) {
  return response.data.drinks
    .map(drink => {
      return `<div class="container">
    <div class="modal-coctails dark--modal-back" data-modal-open data-modal-scale>
      <h2 class="modal-coctail-name dark--title">${drink.strDrink}</h2>
      <h3 class="modal-ingredients dark--title">ingredients</h3>
      <p class="modal-per dark--text">Per cocktail</p>     
        <ul class="modal-coctail-components dark--text">
        </ul>
      <img src="${drink.strDrinkThumb}" alt="cocktail" class="modal-img" />
      <h3 class="modal-Instractions dark--title">Instractions:</h3>
      <p class="modal-text dark--text">
        ${drink.strInstructions}
      </p>
       <button class="modal-button" data-modal-a>Add to favorite</button>
      <button class="modal-button hidden_remove" data-modal-b>
        Remove from favorite
      </button>
           <button
        type="button"
        class="modal-menu__close"
        aria-label="Mobile menu closed"
        data-modal-close
      >
        <svg class="btn-menu__icon dark--fill" width="32px" height="32px">
          <use href="./images/icon.svg#icon-close"></use>
        </svg>
      </button>
    </div>
  </div>`;
    })
    .join('');
}

// <li class="modal-coctail-component dark--text" data-modal-open> ice</li>
// <li class="modal-coctail-component dark--text" data-modal-open> 1 ounce gin</li>
// <li class="modal-coctail-component dark--text" data-modal-open> 1 ounce Campari</li>
// <li class="modal-coctail-component dark--text" data-modal-open> 1 ounce sweet vermouth</li>
// <li class="modal-coctail-component dark--text" data-modal-open> Garnish: orange peel</li>

export async function onOpenModalClick(e) {
  if (e.target.className === 'cocktails__button-text') {
    try {
      const cocktailAPI = new CocktailAPI();

      cocktailAPI.id = e.target.id;
      const responseID = await cocktailAPI.getCocktailsId();
      const modalMarkup = createModalMarkup(responseID);
      console.log(modalMarkup);
      renderMarkup(refs.modalContainer, modalMarkup);
      refs.backdrop.classList.remove('is-hidden-modal-coctails');

      document.addEventListener('keydown', onCloseEsc);
    } catch (error) {
      console.log(error.message);
    }
  }
}

refs.cocktailsList.addEventListener('click', onOpenModalClick);

export function onCloseEsc(e) {
  if (e.code === 'Escape') {
    document.body.classList.remove('modal-open');
    backdrop.classList.add('is-hidden');
    // modalIngr.classList.add('is-hidden');
    cocktailModalMain.classList.remove('is-hidden');
    document.removeEventListener('keydown', onCloseEsc);
  }
}
