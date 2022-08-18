//footer

const refs = {
  footerOpenBtn: document.querySelector('[data-modal-team-open]'),
  footerCloseBtn: document.querySelector('[data-modal-team-close]'),
  teamContainer: document.querySelector('.team__container'),
  modal: document.querySelector('[data-modal-team]'),
};

//listeners //
refs.footerOpenBtn.addEventListener('click', toggleModalTeam);
refs.footerCloseBtn.addEventListener('click', toggleModalTeam);

function toggleModalTeam(event) {
  event.preventDefault();
  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
}
