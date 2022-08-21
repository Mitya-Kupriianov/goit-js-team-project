import { getRandomCocktail } from './getCocktail';

export default async function insertCocktails() {
  let array = [];
  for (let index = 1; index <= 9; index++) {
    const element = await getRandomCocktail();
    array.push(element.data.drinks);
  }
}
