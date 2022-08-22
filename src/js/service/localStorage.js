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
  data = data ? JSON.parse(data) : [];
  data.push(id);
  localStorage.setItem('cocktails', JSON.stringify(data));
}

export function getCocktailStorageData(KEY) {
  try {
    const jsonData = localStorage.getItem(KEY);
    // console.log('KEY :>> ', KEY);
    // console.log('jsonData :>> ', jsonData);
    if (jsonData) return jsonData;
  } catch (error) {
    console.log(error);
  }
}

export function removeFromLocalStorage(idDrink) {
  localStorage.removeItem(KEY);
}

// export function onAddBtnClick(event) {
//   const idDrink = event.target.parentElement.id;
//   favorite.addFavoriteDrinkById(idDrink);
//   setCocktailToLocalStorage(idDrink);
// }

export function onRemoveBtnClick(event) {
  const idDrink = event.target.parentElement.id;
  favorite.removeFavoriteDrinkById(idDrink);
  removeFromLocalStorage(idDrink);
}
