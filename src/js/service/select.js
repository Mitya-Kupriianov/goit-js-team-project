import { refs } from './hero-refs';

const {
  buttonLogin,
  selectMenuRef,
  selectBtnRef,
  optionsRef,
  heroSelectTextRef,
} = refs;
// console.log(optionsRef);

optionsRef.forEach(option => {
  option.addEventListener('click', () => {
    let selectedOption = option.querySelector('.hero__option-text').innerText;
    heroSelectTextRef.innerText = selectedOption;
    //   console.log(selectedOption);

    selectMenuRef.classList.remove('active');
  });
});

selectBtnRef.addEventListener('click', () =>
  selectMenuRef.classList.toggle('active')
);
