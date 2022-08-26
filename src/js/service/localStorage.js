import CocktailAPI from './getCocktail';
import { includes } from 'lodash';
const favorite = new CocktailAPI();

let cocktail = {
  idDrink: '',
};

//              -------Set to Local Storage-------
export function setCocktailToLocalStorage(id) {
  let data = getCocktailStorageData(favorite.KEY);
  data = data ? data : [];
  data.push(id);
  localStorage.setItem('cocktails', JSON.stringify(data));
}

//              -------Get from Local Storage-------
export function getCocktailStorageData(KEY) {
  try {
    const jsonData = localStorage.getItem(KEY);
    if (jsonData) return JSON.parse(jsonData);
  } catch (error) {
    console.log(error);
  }
}

//              -------Remove from Local Storage-------
export function removeFromLocalStorage(idDrink) {
  let data = getCocktailStorageData(favorite.KEY);
  let index = data.indexOf(idDrink);
  if (data.includes(idDrink)) {
    data.splice(index, 1);
    localStorage.setItem('cocktails', JSON.stringify(data));
  }
}
