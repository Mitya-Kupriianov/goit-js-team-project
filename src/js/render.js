import templateList from '../tmp/letters.hbs';
import templateSelect from '../tmp/selector.hbs';
// console.log(templateFunction);

// Потом изменить на импорт когда создадим рефы------->

export const refs = {
  heroList: document.querySelector('.hero__list'),
  heroSelect: document.querySelector('.hero__select'),
};
const { heroList, heroSelect } = refs;
// console.log(heroList);

export const letters = {
  letter: [
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ],
};

// console.log(letters);
export function createMarkup(data, element, callback) {
  const markup = callback(data);
  return element.insertAdjacentHTML('beforeend', markup);
}

createMarkup(letters, heroSelect, templateSelect);
createMarkup(letters, heroList, templateList);
// console.log(templateFunction(letters));
