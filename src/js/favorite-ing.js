import {
  getCocktailStorageData,
  removeFromLocalStorage,
} from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';

console.log(1111);
const favorite = new CocktailAPI();
const refs = {
  favoriteListRef: document.querySelector('.favorite__list-card'),
};

// refs.favoriteListRef.addEventListener('click', onRemoveBtnClick);

export function onRemoveBtnClick(e) {
  const idDrink = e.target.parentElement.id;
  favorite.removeFavoriteDrinkById(idDrink);
  removeFromLocalStorage(idDrink);

  // const btn = e.target.closest('.js-remove-btn');
  //   const data = getCocktailStorageData(favorite.KEY);
  //   const response = data.filter(
  //     (item, index, data) => data.indexOf(item) === index
  //   );
}

refs.favoriteListRef.addEventListener('click', onRemoveBtnClick);
