(() => {
    const refs = {
      removBtn: document.querySelector('[data-modal-d]'),
      addBtn: document.querySelector('[data-modal-c]'),
    };
  
    refs.addBtn.addEventListener('click', transformBtm);
  
    function transformBtm() {
      refs.removBtn.classList.remove('hidden-2');
    }
  })();