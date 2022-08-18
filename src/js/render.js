import templateFunction from '../tmp/letters.hbs';
import templateFunction from '../tmp/selector.hbs';
console.log(templateFunction);

const refs = {
  heroList: document.querySelector('.hero__list'),
  heroSelect: document.querySelector('.hero__select'),
};
const { heroList, heroSelect } = refs;
console.log(heroList);

const letters = {
  letter: [
    'A',
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

console.log(letters);
function createMarkup(data, element) {
  const markup = templateFunction(data);
  return element.insertAdjacentHTML('beforeend', markup);
}

createMarkup(letters, heroList);
createMarkup(letters, heroSelect);
console.log(templateFunction(letters));
