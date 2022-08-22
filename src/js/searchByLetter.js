import CocktailAPI from './service/getCocktail';
import {
  renderMarkup,
  createMarkup,
  markupFilter,
} from './service/create-markup';

const listOfLetters = document.querySelector('.hero__list');
const cocktailList = document.querySelector('.cocktails__list');

listOfLetters.addEventListener('click', onLetterClick);
const cocktailApi = new CocktailAPI();

//! <--------1-------> ///

export function onLetterClick(e) {
  console.log(e.target.Node);
  const letter = e.target.innerHTML.toLowerCase();
  renderByLetter(letter);
}

export async function renderByLetter(letter) {
  cocktailApi.letter = letter;
  const response = await cocktailApi.getCocktailByLetter();
  const markup = createMarkup(response);
  const filterMarkup = markupFilter(markup);
  renderMarkup(cocktailList, filterMarkup);
}

//! <----------2----------->//

// async function onLetterClick(e) {
//   console.log(e.target.innerHTML);
//   if (!e.target.innerHTML) return;
//   cocktailApi.searchQuery = e.target.innerHTML;

//   try {
//     await cocktailApi
//       .getCocktailByLetter()
//       .then((cocktailApi.drinks = cocktailApi.data.drinks));
//     console.log(cocktailApi.drinks);
//     renderMarkup(cocktailApi.drinks);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
