import './style.css';
import getMovie from './modules/getMovies.js';
import display from './modules/display.js';
import getLikes from './modules/getLikes.js';
import like from './modules/like.js';

const appId = 'WGv1nO0NTRyk5wZp7rJP';

const numberOfMovies = 6;
let index = 1;
const movies = [];
while (index <= numberOfMovies) {
  const movie = await getMovie(index + 1);
  movies.push(movie);
  index += 1;
}

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
//  console.log(likes);
//  console.log(typeof(likes));
await display(movies, likes, appId);

const likeBtns = document.querySelectorAll('.like-button');
// console.log(likeBtns);
async function update(likes, index, span) {
  console.log(likes);
  const movieId = `${index + 1}`;
  console.log(typeof (movieId));
  console.log(span);
  likes.forEach((item) => {
    console.log('likes');
    if (movieId === item.item_id) {
      span.innerHTML = `${item.likes}`;
    }
  });
}

likeBtns.forEach((item, index) => {
  item.addEventListener('click', async (e) => {
    const asd = e.currentTarget.parentNode.children[0];
    await like(appId, index + 1);
    const likes = await updateLikes(appId);
    const asss = await asd;
    await update(likes, index, asss);
  });
});
