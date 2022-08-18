
  (() => {
    const refs = {
      removBtn: document.querySelector('[data-modal-b]'),
      addBtn: document.querySelector('[data-modal-a]'),
    };
  
    refs.addBtn.addEventListener('click', transformBtm);
  
    function transformBtm() {
      refs.removBtn.classList.remove('hidden_remove');
    }
  })();