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

export function setCocktailToLocalStorage(event, arr) {
  console.dir(event);
  cocktail = event.target.parentElement.id;
  // console.log(cocktail);
  addCocktailsToArrayLS(arr);
  localStorage.setItem('cocktails', JSON.stringify(cocktail));
}

export function getCocktailStorageData(KEY) {
  try {
    const jsonData = JSON.parse(localStorage.getItem(KEY));
    if (!jsonData) return;
  } catch (error) {
    console.log(error);
  }
}

export function onAddBtnClick(event) {
  const idDrink = event.target.parentElement.id;
  favorite.addFavoriteDrinkById(idDrink);
  setCocktailToLocalStorage(event);
}

export function removeFromLocalStorage(idDrink) {
  localStorage.removeItem(KEY);
}

//
