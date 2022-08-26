import CocktailAPI from './getCocktail';
import { includes } from 'lodash';
const favorite = new CocktailAPI();

let cocktail = {
  idDrink: '',
};

//              -------Set to Local Storage-------
export function setCocktailToLocalStorage(id, payLoad) {
  let data = getCocktailStorageData(payLoad);
  data = data ? data : [];
  data.push(id);
  localStorage.setItem('cocktails', JSON.stringify(data));
}

//              -------Get from Local Storage-------
export function getCocktailStorageData(payLoad) {
  try {
    const jsonData = localStorage.getItem(payLoad);
    if (jsonData) return JSON.parse(jsonData);
  } catch (error) {
    console.log(error);
  }
}

//              -------Remove from Local Storage-------
export function removeFromLocalStorage(idDrink, payLoad) {
  let data = getCocktailStorageData(payLoad);
  let index = data.indexOf(idDrink);
  if (data.includes(idDrink)) {
    data.splice(index, 1);
    localStorage.setItem('cocktails', JSON.stringify(data));
  }
}
