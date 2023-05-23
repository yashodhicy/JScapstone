import './style.css';
import getMovie from './modules/getMovies.js';
import display from './modules/display.js';
import getLikes from './modules/getLikes.js';
import like from './modules/like.js';
import popup from './modules/popup.js';
import showhide from './modules/showhide.js';
import getComments from './modules/getcomments.js';
import addcomment from './modules/comment.js';

const appId = 'WGv1nO0NTRyk5wZp7rJP';

const numberOfMovies = 6;
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
    const rescomments = await getComments(appId,index+1);
    await showhide();
    await popup(resdata,rescomments);
    
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
  // const form = target.parentNode;
  // const addcomment = form.parentNode;
  

  if (target.classList.contains('submitbtn')) {
    event.preventDefault();
    let userName = document.getElementById('username').value;
    let comment = document.getElementById('usercomment').value;
    const movie = target.closest('#popup-window').index;
    const userComment ={userName,comment};
    //console.log(movie,userComment);
    await addcomment(appId,movie,userComment);
    
  }
});