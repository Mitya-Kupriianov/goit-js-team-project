const refs = {
  modalOpenBtn: document.querySelectorAll('[data-modal-cocktail-open]'),

  backdrop: document.querySelector('[data-modal]'),
};

//listeners //
refs.modalOpenBtn.addEventListener('click', modalCocktOpen);

function modalCocktOpen(event) {
  console.log(event);
  event.preventDefault();
  refs.backdrop.classList.remove('is-hidden-modal-coctails');
}
