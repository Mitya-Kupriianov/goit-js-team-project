// подключить сюда KEY из getCocktails

// вызвать

// favorite.addFavoriteDrinkById(setCocktailToLocalStorage())

// добавить слушателя на кнопку "Add to"

// js-add-btn в разметку Андрея
import CocktailAPI from './getCocktail';
const favorite = new CocktailAPI();

console.log(1111);

let cocktails = {
  strDrink: '',
  strDrinkThumb: '',
  idDrink: '',
};

export function setCocktailToLocalStorage(event) {
  localStorage.setItem('cocktails', JSON.stringify(cocktails));
}

export function getCocktailStorageData(KEY) {
  const jsonData = JSON.parse(localStorage.getItem(KEY));
  if (!jsonData) return;
}

export function onAddBtnClick(event) {
  console.dir(event);
  favorite.addFavoriteDrinkById(idDrink);
  setCocktailToLocalStorage(event);
}
