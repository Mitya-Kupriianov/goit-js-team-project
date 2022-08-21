// import { createMarkup } from './render';
// import CocktailAPI from './service/getCocktail';
// import cardTmpl from '../tmp/random-card.hbs';

// refs = {
//   searchForm: document.querySelector('.search__input'),
//   loadMoreBtn: document.querySelector('.load__more'),
//   cocktailsList: document.querySelector('.cocktails__list'),
// };

// const cocktailAPI = new CocktailAPI();

// refs.searchForm.addEventListener('input', onSearch);
// refs.loadMoreBtn.addEventListener('click', loadMore);

// function onSearch(e) {
//   e.preventDefault();

//   cocktailAPI.query = e.target.value.trim('');

//   if (!cocktailAPI.query) {
//     alert('notify alert');
//   }
//   cocktailAPI.resetPage();
//   cocktailAPI.getCocktailByName().then(appendToMarkup);
// }

// // export function renderMarkup(element, markup) {
// //   element.innerHTML = '';
// //   element.insertAdjacentHTML('beforeend', markup);
// // }

// function appendToMarkup(drinks) {
//   const markup = cardTmpl(drinks);
//   console.log(markup);
//   refs.cocktailsList.innerHTML = markup;
// }

// function loadMore() {
//   cocktailAPI.getCocktailByName();
// }
