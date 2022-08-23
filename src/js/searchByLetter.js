import CocktailAPI from './service/getCocktail';
import { loadMore, pagesDrop } from './pagination';
import {
  renderMarkup,
  createMarkup,
  markupFilter,
} from './service/create-markup';
export const btnLoad = document.querySelector('.load__more');
const listOfLetters = document.querySelector('.hero__list');
const cocktailList = document.querySelector('.cocktails__list');

listOfLetters.addEventListener('click', onLetterClick);
const cocktailApi = new CocktailAPI();

//! <--------1-------> ///

export function onLetterClick(e) {
  console.log(e.target.Node);
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
  const response = await cocktailApi.getCocktailByLetter();
  const markup = createMarkup(response);
  markupLetter = markup;
  const filterMarkup = markupFilter(markup);
  renderMarkup(cocktailList, filterMarkup);
}
