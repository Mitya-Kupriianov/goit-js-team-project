import CocktailAPI from './service/getCocktail';

export function createModalMarkup(array) {
  return array.data.drinks
    .map(drink => {
      `
      <div class="backdrop-modal is-hidden-modal-coctails" data-modal>
        <div class="container">
          <div class="modal-coctails" data-modal-scale>
            <h2 class="modal-coctail-name">Negroni</h2>
            <h3 class="modal-ingredients">ingredients</h3>
            <p class="modal-per">Per cocktail</p>
            <a href="" data-modal-open>
              <ul class="modal-coctail-components">
                <li>ice</li>
                <li>1 ounce gin</li>
                <li>1 ounce Campari</li>
                <li>1 ounce sweet vermouth</li>
                <li>Garnish: orange peel</li>
              </ul>
            </a>
            <img
              src=${drink.strDrinkThumb}"
              alt="${drink.strDrink}"
              class="modal-img"
            />
            <h3 class="modal-Instractions">Instructions:</h3>
            <p class="modal-text">
             ${drink.strInstructions}
            </p>
            <button class="modal-button" data-modal-a>
              Add to favorite
            </button>
            <button class="modal-button hidden_remove" data-modal-b>
              Remove from favorite
            </button>
            <button
              type="button"
              class="modal-menu__close"
              aria-label="Mobile menu closed"
              data-modal-close
              data-id="${drink.idDrink}"
            >
              <svg class="btn-menu__icon" width="32px" height="32px">
                <use href="./images/icon.svg#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>`;
    })
    .join('');
}

export function createModalIngredients(array) {
  return array.data.drinks
    .map(ingredient => {
      `div class="backdrop-modal-components is-hidden-modal-two" data-modal-2>
  <div class="modal-two-container">
    <h2 class="modal-two-header">${drink.strIngredient}</h2>
    <h3 class="modal-two-name">${
      drink.strType === null ? 'Sorry, not specified' : drink.strType
    }</h3>
    <p class="modal-two-text">
      <span class="modal-two-span">Campari</span> is an Italian alcoholic
      liqueur, considered an apéritif (20.5%, 21%, 24%, 25%, or 28.5% ABV,
      depending on the country in which it is sold), obtained from the infusion
      of herbs and fruit (including chinotto and cascarilla) in alcohol and
      water. It is a bitters, characterised by its dark red colour.
    </p>
    <ul class="modal-two-ingridients">
      <li>Type:Bitters</li>
      <li>Country of origin:Italy</li>
      <li>Alcohol by volume:20.5–28.5%</li>
      <li>Flavour:Bitter, spicy and sweet</li>
    </ul>
    <button class="modal-button" type="button" data-modal-c data-idingredient="${
      drink.idIngredient
    }
    }>
      Add to favorite
    </button>
    <button
      class="modal-button hidden-components-modal"
      type="button"
      data-modal-d
    >
      Remove from favorite
    </button>
    <button
      type="button"
      class="modal-menu__close"
      data-modal-close-2
      aria-label="Mobile menu closed"
    >
      <svg class="btn-menu__icon" width="32px" height="32px">
        <use href="./images/icon.svg#icon-close"></use>
      </svg>
    </button>
  </div>
</div>`;
    })
    .join();
}

export async function onOpenModalClick(e) {
  if (e.target.className === 'cocktails__button-text') {
    console.log(e);
    try {
      const cocktailAPI = new CocktailAPI();

      cocktailAPI.id = e.target.id;
      const responseID = await cocktailAPI.getCocktailsId();
      console.log(responseID);
      const modalMarkup = createModalIngredients(responseID);
      console.log(modalMarkup);

      console.log(responseID);
    } catch (error) {
      console.log(error.message);
    }
  }
}

refs.cocktailsList.addEventListener('click', onOpenModalClick);
