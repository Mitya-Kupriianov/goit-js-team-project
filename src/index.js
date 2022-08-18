import templateFunction from './hero_hbs/letters.hbs';
console.log(templateFunction);

const refs = {
  heroList: document.querySelector('.hero__list'),
};
const { heroList } = refs;
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
function createMarkup(letters) {
  const markup = templateFunction(letters);
  return heroList.insertAdjacentHTML('beforeend', markup);
}

createMarkup(letters);
console.log(templateFunction(letters));
