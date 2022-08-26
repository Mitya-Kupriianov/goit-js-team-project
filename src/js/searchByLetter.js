import CocktailAPI from './service/getCocktail';
import { loadMore, pagesDrop } from './pagination';
import {
  renderMarkup,
  createRandomMarkup,
  markupFilter,
} from './service/create-markup';

import Notiflix from 'notiflix';
import { onError } from './service/notification';
import { noResultsMarkup } from '../js/service/create-markup';

const listOfLetters = document.querySelector('.hero__list');
const cocktailList = document.querySelector('.cocktails__list');
const title = document.querySelector('.cocktails__first-title');
const mobileListOfLetter = document.querySelector('.hero__select');

export const btnLoad = document.querySelector('.load__more');
const optionsRef = document.querySelectorAll('.option');

listOfLetters.addEventListener('click', onLetterClick);
mobileListOfLetter.addEventListener('click', onLetterClick);
const cocktailApi = new CocktailAPI();

//! <--------1-------> ///

export function onLetterClick(e) {
  console.log(e.target.closest('.option'));
  if (!e.target.innerHTML) return;
  const letter = e.target.innerHTML.toLowerCase();
  renderByLetter(letter);
  showLoadMoreBtn();
  pagesDrop();
}

function showLoadMoreBtn() {
  btnLoad.classList.remove('btn_is-hidden');
  btnLoad.addEventListener('click', loadMore);
}
export let markupLetter = '';

export async function renderByLetter(letter) {
  cocktailApi.letter = letter;
  const drinks = [];
  const response = cocktailApi.getCocktailByLetter();
  drinks.push(response);

  Promise.all(drinks).then(
    function (drinks) {
      console.log(drinks);
      const markup = createMarkup(drinks);
      console.log(markup);

      markupLetter = markup;
      const filterMarkup = markupFilter(markupLetter);
      renderMarkup(cocktailList, filterMarkup);
    }
    //  .catch (error) {
    //   onError();
    //   title.innerHTML = "Sorry, we didn't find any cocktail for you";
    //   return (cocktailList.innerHTML = noResultsMarkup());
    // }
  );
}
