export function createMarkup(array) {
  return array.data.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => {
    return `
      <li class="cocktails__item card-set-item">
        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
        />
        <div class="cocktails__box">
          <h2 class="cocktails__second-title">${strDrink}</h2>
          <div class="cocktails__button-box id=${idDrink}">
            <button
              type="button"
              class="cocktails__btn"
              data-modal-cocktail-open
            >
              <span class="cocktails__button-text">Learn more</span>
            </button>
            <button type="button" class="cocktails__btn transparent">
              <span class="cocktails__button-text">Add to</span>
              <svg class="cocktails__btn-icon" width="18" height="18">
                <use href="./images/icon.svg#icon-redlike"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`;
  });
}

export function renderMarkup(element, markup) {
  element.innerHTML = markup;
  // element.insertAdjacentHTML('beforeend', markup);
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
          <div class="cocktails__button-box id=${idDrink}">
            <button
              type="button"
              class="cocktails__btn"
              data-modal-cocktail-open
            >
              <span class="cocktails__button-text" id=${idDrink} >Learn more</span>
            </button>
            <button type="button" class="cocktails__btn transparent">
              <span class="cocktails__button-text">Add to</span>
              <svg class="cocktails__btn-icon" width="18" height="18">
                <use href="./images/icon.svg#icon-redlike"></use>
              </svg>
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
  } else return markup.filter((_, index) => index <= 9).join('');
}
