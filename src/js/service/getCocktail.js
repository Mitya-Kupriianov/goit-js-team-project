const axios = require('axios');

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

// todo byName //

export async function getCocktailByName(name) {
  try {
    const searchParams = new URLSearchParams({
      s: `${name}`,
    });
    const response = await axios.get(`${BASE_URL}search.php?${searchParams}`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

// todo byLetter //

export async function getCocktailByLetter(letter) {
  try {
    const searchParams = new URLSearchParams({
      f: `${letter}`,
    });
    const response = await axios.get(`${BASE_URL}search.php?${searchParams}`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

// todo byIngredient //

export async function getCocktailByIngredient(ingredient) {
  try {
    const searchParams = new URLSearchParams({
      i: `${ingredient}`,
    });
    const response = await axios.get(`${BASE_URL}search.php?${searchParams}`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

// todo byId //

export async function getCocktailById(id) {
  try {
    const searchParams = new URLSearchParams({
      i: `${id}`,
    });
    const response = await axios.get(`${BASE_URL}lookup.php?${searchParams}`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

// todo random //

export async function getRandomCocktail() {
  try {
    const response = await axios.get(`${BASE_URL}random.php`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

// todo Checkers //

getCocktailByName('vodka');
getCocktailByLetter('a');
getCocktailByIngredient('ice');
getCocktailById('11007');
getRandomCocktail();