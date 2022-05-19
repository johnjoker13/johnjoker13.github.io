const li = document.querySelectorAll('.container__list__item');
const btn = document.querySelector('.container__btn');

let selectedOne;
btn.disabled = true;

li.forEach((x) => {
  x.addEventListener('click', () => {
    selectedOne && selectedOne.classList.remove('selected');
    selectedOne = x;
    selectedOne.classList.add('selected');
    btn.classList.add('selected');
    btn.disabled = false;
  });
});

btn.addEventListener('click', () => console.log('clicked'));