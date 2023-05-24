import './style.css';
import getMovie from './modules/getMovies.js';
import display from './modules/display.js';
import getLikes from './modules/getLikes.js';
import like from './modules/like.js';
import popup from './modules/popup.js';
import showhide from './modules/showhide.js';
import addcomment from './modules/comment.js';
import refresh from './modules/refresh.js';
import updateCount from './modules/moviesCounter.js';

const appId = 'WGv1nO0NTRyk5wZp7rJP';

const numberOfMovies = 9;
let index = 1;
const movies2 = [];
const movies = [];

while (index <= numberOfMovies) {
  movies2.push('movie');
  index += 1;
}

movies2.forEach(async (item, index) => {
  const movie = await getMovie(index + 1);
  movies.push(movie);
});
const updateLikes = async (appId) => {
  let likes = await getLikes(appId);

  if (likes.length === 0) {
    likes = [];
  } else {
    likes = JSON.parse(likes);
  }
  return likes;
};

const likes = await updateLikes(appId);

await display(movies, likes, appId);

// update count
const counter = document.getElementById('counter');
counter.innerHTML = await updateCount();

const likeBtns = document.querySelectorAll('.like-button');

const update = async (likes, index, span) => {
  const movieId = `${index + 1}`;
  likes.forEach((item) => {
    if (movieId === item.item_id) {
      span.innerHTML = `${item.likes}`;
    }
  });
};

likeBtns.forEach((item, index) => {
  item.addEventListener('click', async (e) => {
    const likesCount = e.currentTarget.parentNode.children[0];
    await like(appId, index + 1);
    const likes = await updateLikes(appId);
    const likesBox = await likesCount;
    await update(likes, index, likesBox);
  });
});

// comment button
const commentbtns = document.querySelectorAll('.comments');

commentbtns.forEach((commentbtn, index) => {
  commentbtn.addEventListener('click', async () => {
    const resdata = await getMovie(index + 1);
    await showhide();
    await popup(resdata);
    refresh(appId, index + 1);
    window.scrollTo(2, 2);
  });
});

document.addEventListener('click', async (event) => {
  const { target } = event;

  if (target.classList.contains('cancel-btn')) {
    await showhide();
  }
});

// add comment

document.addEventListener('click', async (event) => {
  const { target } = event;
  if (target.classList.contains('submitbtn')) {
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const comment = document.getElementById('usercomment').value;
    const movie = target.closest('#popup-window').index;
    const userComment = { userName, comment };
    await addcomment(appId, movie, userComment);
    refresh(appId, movie);
    document.getElementById('username').value = '';
    document.getElementById('usercomment').value = '';
  }
});