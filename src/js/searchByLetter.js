import CocktailAPI from './service/getCocktail';

const listOfLetters = document.querySelector('.hero__list');

listOfLetters.addEventListener('click', onLetterClick);
const cocktailApi = new CocktailAPI();

console.log(cocktailApi);

async function onLetterClick(e) {
  console.log(e.target.innerHTML);
  if (!e.target.innerHTML) return;
  cocktailApi.searchQuery = e.target.innerHTML.toLowerCase();

  try {
    await cocktailApi.getCocktailByLetter();
    if (!cocktailApi.drinks) return console.log('render not finded');

    console.log('render');
  } catch (error) {
    console.log(error.message);
  }
}
