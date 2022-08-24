import { createMarkup, renderMarkup } from './service/create-markup';
import { getCocktailStorageData } from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';

const favorite = new CocktailAPI();
console.log(111);
export async function onFavoriteCocktailsLoad(e) {
  const data = getCocktailStorageData(favorite.KEY);
  console.log(data);
  // await data.forEach(item => {
  //   favorite.getCocktailsId();
  // });
  //   console.log(cycleResult);
  //   const responseID = await favorite.getCocktailsId();
  //   console.log(responseID);
  // const favoriteCocktailsMarkup = createMarkup(responseID);
  // console.log(favoriteCocktailsMarkup);
}

window.addEventListener('load', onFavoriteCocktailsLoad);
