import {
  getCocktailStorageData,
  removeFromLocalStorage,
} from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';

console.log(1111);
const favorite = new CocktailAPI();
const favoriteListRef = document.querySelector('.favorite__list-card');

export async function onFavoriteIngredientsLoad() {
  const data = await getCocktailStorageData(favorite.KEY);
  const ingredients = [];
  if (!data) {
    favoriteListRef.innerHTML = "Sorry, we didn't find any cocktail for you";
  }

  const render = () => {
    const arr = { data: { drinks: ingredients } };
    console.log(arr);
    const markup = createFavoriteIngredientsMarkup(arr);
    renderMarkup(favoriteListRef, markup);
  };

  await data?.forEach(async ingr => {
    console.log(data);
    const response = await favorite.getCocktailByIngredient(ingr);
    const cocktail = response.data.drinks;
    if (ingredients.length) ingredients.push(...cocktail);
    if (ingredients.length === data.length) render();
  });
}

export function createFavoriteIngredientsMarkup(arr) {
  return arr.data.ingredients.map(
    ({ strDrink, strCategory, strDrinkThumb, idDrink }) => {
      return `
      <li class="favorite__list-item card-set-item">
        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
        />
      <p class="favorite__list-name">Campari</p>
      <p class="favorite__list-type">${strCategory}</p>
      <div class="favorite__btn-wrap">
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
              <span class="cocktails__button-text">Remove</span>  
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>
      </div>
    </li>`;
    }
  );
}

window.addEventListener('load', onFavoriteIngredientsLoad);
