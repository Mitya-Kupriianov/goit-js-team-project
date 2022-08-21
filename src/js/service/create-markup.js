export function createMarkup(arr) {
  return arr.data.drinks
    .map(({ strDrink, strDrinkThumb }) => {
      return `
      <li class="cocktails__item card-set-item">
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
    })
    .join('');
}

export function renderMarkup(element, markup) {
  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', markup);
}

export function createRandomMarkup(arr) {
  return arr
    .map(item => {
      const { strDrink, strDrinkThumb } = item.data.drinks[0];
      return `
      <li class="cocktails__item card-set-item">
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
    })
    .join('');
}
