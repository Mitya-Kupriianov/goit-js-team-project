import CocktailAPI from './service/getCocktail';
import { renderMarkup } from './service/create-markup';

export const refs = {
  cocktailsList: document.querySelector('.cocktails__list'),
  backdrop: document.querySelector('[data-modal]'),
  modalOpenBtn: document.querySelectorAll('[data-modal-cocktail-open]'),
  modalContainer: document.querySelector('.modal-coctails'),

  modalIngrContainer: document.querySelector('.modal-two-container'),
  ingrWrap: document.querySelector('.modal-coctail-components'),
};

// console.log(12121212);

const cocktailAPI = new CocktailAPI();

function createModalMarkup(response) {
  return response.data.drinks
    .map(drink => {
      return `<div class="container">
    <div class="modal-coctails dark--modal-back" data-modal-open>
      <h2 class="modal-coctail-name dark--title">${drink.strDrink}</h2>
      <h3 class="modal-ingredients dark--title">Ingredients</h3>

      <p class="modal-per dark--text">Per cocktail</p>     

        <ul class="modal-coctail-components dark--text">
        </ul>
      </a>
      <img src="${drink.strDrinkThumb}" alt="cocktail" class="modal-img" />
      <h3 class="modal-Instractions dark--title">Instructions:</h3>
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

function createIngredientsMarkup(ingredients) {
  return ingredients.data.ingredients
    .map(ingredient => {
      return `<div modal-two-container dark--modal-back"><div class="ingr-modal-title-wrapper">
  <h3 class="modal-two-name dark--title">${ingredient.strIngredient}</h3>
  <h4 class="modal-two-span dark--text">
    ${ingredient.strType === null ? 'Sorry, not specified' : ingredient.strType}
  </h4>
</div>
 <button type="button" class="modal-ingredients-close-btn" data-modal-close-ingr>
     <svg class="icon-modal-ingredients" height="32" width="32">
    <use href="${iconsModal}#icon-close-modal-cocktail"></use>
  </svg>
  </button>
</div>
<div class="modal-ingredients-desc">

<p class="ingredients-modal-text">
  ${strDescription === null ? 'Sorry, not specified' : strDescription}
</p>
<ul class="ingredients-modal-list">

  <li class="modal-two-ingridients dark--text"">
    ✶ Type: ${
      ingredient.strType === null ? 'Sorry, not specified' : ingredient.strType
    }
  </li>
  <li class="i">
    ✶ Country of origin: Sorry, not specified
  </li>
  <li class="modal-two-ingridients dark--text">✶ Alcohol : ${
    ingredient.strAlcohol
  }</li>
  <li class="modal-two-ingridients dark--text>
    ✶ Flavour: Sorry, not specified
  </li>
</ul>
<button
id=${ingredient.idIngredient}
  type="button"
  class="ingredients-modal-btn"

>
  Add to favorite
</button></div>`;
    })
    .join('');
}

export async function onOpenModalClick(e) {
  if (e.target.className === 'cocktails__button-text') {
    try {
      cocktailAPI.id = e.target.id;
      // console.log(cocktailAPI.id);
      const responseID = await cocktailAPI.getCocktailsId();
      console.log(responseID);
      const modalMarkup = createModalMarkup(responseID);
      console.log(modalMarkup);

      renderMarkup(refs.modalContainer, modalMarkup);
      refs.backdrop.classList.remove('is-hidden-modal-coctails');

      const markupIngredientsList =
        await createMarkupCocktailForModalListIngredients(responseID);
      // ЭТО ИНГРИДИЕНТЫ РАЗМЕТКА
      console.log(markupIngredientsList);
      // cocktailModalIngredientsList.innerHTML = '';
      refs.ingrWrap.innerHTML = markupIngredientsList;
      // refs.ingrWrap.addEventListener('click', onIngredientClick);
      const modalCloseBtn = document.querySelector('[data-modal-close]');
      modalCloseBtn.addEventListener('click', toggleModal);
      const addToFavouriteModalCocktail = document.querySelector(
        '.cocktails-modal-btn'
      );
      addToFavouriteModalCocktail.addEventListener(
        'click',
        addToFavouriteModal
      );

      renderMarkup(refs.ingrWrap, markupIngredientsList);
      // console.log(renderMarkup);
      refs.backdrop.classList.remove('is-hidden-modal-coctails');

      // document.addEventListener('keydown', onCloseEsc);
    } catch (error) {
      console.log(error.message);
    }
  }
}

function createMarkupCocktailForModalListIngredients(res) {
  const drink = res.data.drinks[0];
  console.log(drink);
  const ingredients = [];

  for (let i = 1; i <= 15; i += 1) {
    let ingredient = drink['strIngredient' + i];
    if (!ingredient) break;
    ingredients.push(ingredient);
    console.log(ingredients);
  }
  return ingredients
    .map(ingredient => {
      return /*html*/ `<li data-ingredient_name="${ingredient}" class="cocktail-ingredient-btn">${ingredient}</li>`;
    })
    .join('');
  // createIngredientsMarkup(ingredients);
}

refs.cocktailsList.addEventListener('click', onOpenModalClick);

function toggleModal() {
  refs.modalOpenBtn.classList.toggle('is-hidden');
}

export function onCloseEsc(e) {
  if (e.code === 'Escape') {
    document.body.classList.remove('modal-open');
    backdrop.classList.add('is-hidden');
    // modalIngr.classList.add('is-hidden');
    cocktailModalMain.classList.remove('is-hidden');
    document.removeEventListener('keydown', onCloseEsc);
  }
}
