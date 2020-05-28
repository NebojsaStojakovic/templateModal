const toogleModal = () => {
  document.querySelector('.modal').classList.toggle('hidden');
};

document.getElementById('btn').addEventListener('click', toogleModal);

document.querySelector('#learn-more').addEventListener('submit', (event) => {
  event.preventDefault();
  toogleModal();
});

document.querySelector('.modal__close span').addEventListener('click', toogleModal);


$(document).ready(() => {
  $('#slideshow .slick').slick();
});
