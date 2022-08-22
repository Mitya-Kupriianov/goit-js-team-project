import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default class CocktailAPI {
  KEY = 'cocktails';
  constructor() {
    this.name = '';
    this.letter = '';
    this.page = 1;
    this.searchQuery = '';
    this.category = '';
    this.drinks = '';
    this.ingredients = {};
    this.favoriteDrinks = [];
    this.favoriteIngredients = [];
  }

  // todo byName //

  async getCocktailByName(query) {
    try {
      return await axios(`${BASE_URL}search.php?s=${this.searchQuery}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // todo byLetter //

  async getCocktailByLetter() {
    try {
      return await axios(`${BASE_URL}search.php?f=${this.searchQuery}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // todo ID //

  async getResultsById(id) {
    try {
      return await axios(`${BASE_URL}lookup.php?i=${id}`);
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

// ___________________________________________________________________________

// const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

// // todo byName //

// export async function getCocktailByName(name) {
//   try {
//     const searchParams = new URLSearchParams({
//       s: `${name}`,
//     });
//     const response = await axios.get(`${BASE_URL}search.php?${searchParams}`);
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // todo byLetter //

// export async function getCocktailByLetter(letter) {
//   try {
//     const searchParams = new URLSearchParams({
//       f: `${letter}`,
//     });
//     const response = await axios.get(`${BASE_URL}search.php?${searchParams}`);
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // todo byIngredient //

// export async function getCocktailByIngredient(ingredient) {
//   try {
//     const searchParams = new URLSearchParams({
//       i: `${ingredient}`,
//     });
//     const response = await axios.get(`${BASE_URL}search.php?${searchParams}`);
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // todo byId //

// export async function getCocktailById(id) {
//   try {
//     const searchParams = new URLSearchParams({
//       i: `${id}`,
//     });
//     const response = await axios.get(`${BASE_URL}lookup.php?${searchParams}`);
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // todo random //

// export async function getRandomCocktail() {
//   try {
//     const response = await axios.get(`${BASE_URL}random.php`);
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // todo Checkers //

// getCocktailByName('vodka');
// getCocktailByLetter('a');
// getCocktailByIngredient('ice');
// getCocktailById('11007');
// getRandomCocktail();
