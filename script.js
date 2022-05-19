const li = document.querySelectorAll('.container__list__item');
const btn = document.querySelector('.container__btn');

for (let i = 0; i < li.length; i+= 1) {
  li[i].addEventListener('click', () => {
    btn.classList.toggle('selected');
  });
};