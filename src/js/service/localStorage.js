import { refs } from './hero-refs';
const { addToFavBtn } = refs;

import CocktailAPI from './getCocktail';
const favorite = new CocktailAPI();

console.log(addToFavBtn);

let cocktail = {
  // strDrink: '',
  // strDrinkThumb: '',
  idDrink: '',
};

export function setCocktailToLocalStorage(id) {
  let data = getCocktailStorageData(favorite.KEY);
  data = data ? data : [];
  data.push(id);
  localStorage.setItem('cocktails', JSON.stringify(data));
}

export function getCocktailStorageData(KEY) {
  try {
    const jsonData = localStorage.getItem(KEY);
    if (jsonData) return JSON.parse(jsonData);
  } catch (error) {
    console.log(error);
  }
}

export function removeFromLocalStorage(idDrink) {
  localStorage.removeItem(KEY);
}

export function onRemoveBtnClick(event) {
  const idDrink = event.target.parentElement.id;
  favorite.removeFavoriteDrinkById(idDrink);
  removeFromLocalStorage(idDrink);
}
