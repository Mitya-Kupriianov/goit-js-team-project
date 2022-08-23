import * as noResults from '../../images/notice/notice.png';
import * as noResults2x from '../../images/notice/notice@2x.png';

export function createMarkup(array) {
  return array.data.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => {
    return `
       <li class="cocktails__item card-set-item ">

        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
        />
        <div class="cocktails__box">

          <h2 class="cocktails__second-title">${strDrink}</h2>
          <div class="cocktails__button-box">

            <button
              type="button"
              class="cocktails__btn"
              data-modal-cocktail-open
            >
              <span class="cocktails__button-text" id=${idDrink} >Learn more</span>
            </button>
            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent" data-id=${idDrink}>

              <span class="cocktails__button-text">Add to</span>
           
            </button>
          </div>
        </div>
      </li>`;
  });
}

export function renderMarkup(element, markup) {
  element.innerHTML = markup;
}

export function createRandomMarkup(array) {
  return array.map(item => {
    const { strDrink, strDrinkThumb, idDrink } = item.data.drinks[0];
    return `
      <li class="cocktails__item card-set-item ">

        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
        />
        <div class="cocktails__box">

          <h2 class="cocktails__second-title">${strDrink}</h2>
          <div class="cocktails__button-box">

            <button
              type="button"
              class="cocktails__btn"
              data-modal-cocktail-open
            >
              <span class="cocktails__button-text" id=${idDrink} >Learn more</span>
            </button>
            <button type="button" class="cocktails__btn dark--btn-back js-add-btn transparent" data-id=${idDrink}>

              <span class="cocktails__button-text">Add to</span>
           
            </button>
          </div>
        </div>
      </li>`;
  });
}

export function markupFilter(markup) {
  if (window.screen.width < 768) {
    return markup.filter((_, index) => index < 3).join('');
  } else if (window.screen.width >= 768 && window.screen.width < 1280) {
    return markup.filter((_, index) => index < 6).join('');
  }
  return markup.filter((_, index) => index < 9).join('');
}

export function noResultsMarkup() {
  return `<img class="no-result" srcset = "${noResults}", srcset =  "${noResults2x}" src="${noResults2x}" alt="No Results"></img>`;
}
