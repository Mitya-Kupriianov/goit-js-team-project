(() => {
    const refs = {
      backdrop: document.querySelector('[data-modal-2]'),
      closeBtn: document.querySelector('[data-modal-close-2]'),
    };
  
    refs.closeBtn.addEventListener('click', closeModal);
  
    function closeModal() {
      refs.backdrop.classList.add('is-hidden-modal-two');
    }
  })();