const li = document.querySelectorAll('.container__list__item');
const btn = document.querySelector('.container__btn');
const thankDiv = document.querySelector('.wrapper__thank__container');
const choosedNum = document.querySelector('.wrapper__thank__text__number');
const wrapper = document.querySelector('.wrapper');

let selectedOne;
let rate;
btn.disabled = true;

li.forEach((x) => {
  x.addEventListener('click', () => {
    selectedOne && selectedOne.classList.remove('selected');
    selectedOne = x;
    selectedOne.classList.add('selected');
    btn.classList.add('selected');
    btn.className += ' actived';
    btn.disabled = false;
    rate = x.innerText;
  });
});

btn.addEventListener('click', () => {
  thankDiv.style.display = 'block';
  choosedNum.innerText = rate;
  wrapper.style.display = 'none';
});
