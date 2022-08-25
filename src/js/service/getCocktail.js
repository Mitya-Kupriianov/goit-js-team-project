import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default class CocktailAPI {
  KEY = 'cocktails';
  constructor() {
    this.name = '';
    this.letter = '';
    this.page = 1;
    this.drinks = '';
    this.searchQuery = '';
    this.category = '';
    this.drinks = '';
    this.ingredients = {};
    this.favoriteDrinks = [];
    this.favoriteIngredients = [];
  }

  // todo byName //

  async getCocktailByName() {
    try {
      return await axios(`${BASE_URL}search.php?s=${this.searchQuery}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // todo byLetter //

  async getCocktailByLetter() {
    try {
      return await axios(`${BASE_URL}search.php?f=${this.letter}`);
    } catch (error) {
      alert(error);
    }
  }

  // todo ID //

  async getCocktailsId() {
    try {
      return await axios(`${BASE_URL}lookup.php?i=${this.id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // todo byIngredient //

  async getCocktailByIngredient() {
    try {
      return await axios(`${BASE_URL}search.php?i=${this.ingredients}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getRandomCocktail() {
    try {
      let arr = [];
      for (let i = 0; i < 9; i += 1) {
        const cocktail = axios(BASE_URL + 'random.php');
        arr.push(cocktail);
      }

      const promise = await Promise.all(arr).then(response => {
        return response;
      });
      return promise;
    } catch (error) {
      throw new Error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  addFavoriteDrinkById(idDrink) {
    this.favoriteDrinks.push(idDrink);
  }

  removeFavoriteDrinkById(idDrink) {
    this.favoriteDrinks = this.favoriteDrinks.filter(data => data !== idDrink);
  }
}
