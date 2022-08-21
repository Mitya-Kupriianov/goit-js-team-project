const refs = {
  modalOpenBtn: document.querySelectorAll('[data-modal-cocktail-open]'),
  backdrop: document.querySelector('[data-modal]'),
};
refs.modalOpenBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    refs.backdrop.classList.remove('is-hidden-modal-coctails');
  });
});
