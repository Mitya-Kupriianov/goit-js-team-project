

    const refs = {
      backdrop: document.querySelector('[data-modal-2]'),
      closeBtn: document.querySelector('[data-modal-close-2]'),
      openModalIngrdients: document.querySelectorAll('[data-modal-open]'),
      scaleModal: document.querySelector('[data-modal-scale]'),
    };
  
    refs.closeBtn.addEventListener('click', closeModal);
    
    refs.openModalIngrdients.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        refs.backdrop.classList.remove('is-hidden-modal-two');
        refs.scaleModal.classList.add('modal-scale');
      });
    });
    function closeModal() {
      refs.backdrop.classList.add('is-hidden-modal-two');
      refs.scaleModal.classList.remove('modal-scale');
    }


