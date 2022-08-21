import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default class CocktailAPI {
  constructor() {
    this.name = '';
    this.letter = '';
    this.page = '';
    this.searchQuery = '';
    this.id = '';
    this.category = '';
    this.ingredients = '';
  }

  async getCocktailByName(query) {
    try {
      return await axios(`${BASE_URL}search.php?s=${this.searchQuery}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getCocktailByLetter() {
    try {
      return await axios(`${BASE_URL}search.php?f=${this.searchQuery}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getResultsById(id) {
    try {
      return await axios(`${BASE_URL}lookup.php?i=${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

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
      for (let i = 0; i <= 9; i += 1) {
        const cocktail = axios(BASE_URL + 'random.php');
        arr.push(cocktail);
      }

      const promise = await Promise.all(array).then(response => {
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
}
