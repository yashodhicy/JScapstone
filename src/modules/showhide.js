const moviesContainer = document.getElementById('movies-container');
const headerEl = document.getElementById('header');
const footerEL = document.getElementById('footer');

const showhide = async () => {
  moviesContainer.classList.toggle('show');
  moviesContainer.classList.toggle('hide');
  headerEl.classList.toggle('show');
  headerEl.classList.toggle('hide');
  footerEL.classList.toggle('show');
  footerEL.classList.toggle('hide');
  document.getElementById('popup-window').classList.toggle('hide');
  document.getElementById('popup-window').classList.toggle('show');
  document.querySelector('body').classList.toggle('background');
};

export default showhide;