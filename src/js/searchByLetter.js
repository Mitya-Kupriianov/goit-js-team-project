import CocktailAPI from './service/getCocktail';
import {
  renderMarkup,
  createMarkup,
  markupFilter,
} from './service/create-markup';
import Notiflix from 'notiflix';
import { onError } from './service/notification';
import { noResultsMarkup } from '../js/service/create-markup';

const listOfLetters = document.querySelector('.hero__list');
const cocktailList = document.querySelector('.cocktails__list');
const title = document.querySelector('.cocktails__first-title');
const mobileListOfLetter = document.querySelector('.hero__select');

listOfLetters.addEventListener('click', onLetterClick);
mobileListOfLetter.addEventListener('click', onLetterClick);
const cocktailApi = new CocktailAPI();

//! <--------1-------> ///

export function onLetterClick(e) {
  console.log(e.target.closest('.option'));
  if (!e.target.innerHTML) return;
  const letter = e.target.innerHTML.toLowerCase();
  renderByLetter(letter);
}

export async function renderByLetter(letter) {
  try {
    cocktailApi.letter = letter;
    const response = await cocktailApi.getCocktailByLetter();
    const markup = createMarkup(response);
    const filterMarkup = markupFilter(markup);
    renderMarkup(cocktailList, filterMarkup);
  } catch (error) {
    onError();
    title.innerHTML = "Sorry, we didn't find any cocktail for you";
    return (cocktailList.innerHTML = noResultsMarkup());
  }
}
