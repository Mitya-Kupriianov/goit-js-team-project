(() => {
    const refs = {
      backdrop: document.querySelector('[data-modal-2]'),
      closeBtn: document.querySelector('[data-modal-close-2]'),
      openModal: document.querySelector('[data-modal-open]'),
      scaleModal: document.querySelector('[data-modal-scale]'),
    };
  
    refs.closeBtn.addEventListener('click', closeModal);
    refs.openModal.addEventListener('click', openModal);
    refs.openModal.addEventListener('click', scaleModal);
    
    function openModal (event){
    event.preventDefault()
    refs.backdrop.classList.remove('is-hidden-modal-two');
  
    }

    function scaleModal (){
      refs.scaleModal.classList.add('modal-scale');
    }

    function closeModal() {
      refs.backdrop.classList.add('is-hidden-modal-two');
      refs.scaleModal.classList.remove('modal-scale');
    }
  })();