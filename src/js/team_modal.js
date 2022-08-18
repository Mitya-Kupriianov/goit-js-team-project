import templateFunction from '../tmp/team-template.hbs';

const refs = {
  teamContainer: document.querySelector('.team__container'),
};

console.log(refs);

const teamData = [
  {
    git: 'https://github.com/Mitya-Kupriianov/',
    photo:
      'https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png',
    name: 'Вовк Андр',
    role: 'TeamLead',
  },

  {
    photo:
      'https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png',
    name: 'не Вовк Андр',
    role: 'Developer',
  },

  {
    photo:
      'https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png',
    name: 'не не Вовк Андр',
    role: 'Developer',
  },

  {
    photo:
      'https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png',
    name: 'не Вовк и не Андр',
    role: 'Developer',
  },

  {
    photo:
      'https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png',
    name: 'точно не Вовк Андр',
    role: 'Developer',
  },
  {
    photo:
      'https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png',
    name: 'точно не Вовк Андр',
    role: 'Developer',
  },

  {
    photo:
      'https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png',
    name: 'точно не Вовк Андр',
    role: 'Developer',
  },
  {
    photo:
      'https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png',
    name: 'точно не Вовк Андр',
    role: 'Developer',
  },
];

console.log(teamData);

function createMarkup(teamData) {
  const markup = templateFunction(teamData);
  console.log(markup);
  return (refs.teamContainer.innerHTML = markup);
}

createMarkup(teamData);
