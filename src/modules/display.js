const display = async (Movies, Likes) => {
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = '';
  const movies = Movies;
  const likes = Likes;

  movies.forEach((movie, index) => {
    const movieId = `${index + 1}`;
    const div = document.createElement('div');
    const movieBar = document.createElement('div');
    const likeBox = document.createElement('div');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const comment = document.createElement('button');
    div.className = 'movie-card';
    movieBar.className = 'movie-description';
    likeBox.className = 'likes';
    span.className = 'likes-counter';
    button.className = 'like-button';
    comment.className = 'comments';
    div.innerHTML = `
    <img class="movie-image" src="${movie.image.original}">`;
    movieBar.innerHTML = `<h2 class="movie-name">${movie.name}</h2>`;
    let likesCount = 0;
    likes.forEach((item) => {
      if (movieId === item.item_id) {
        likesCount = item.likes;
      }
    });

    span.innerHTML = `${likesCount}`;
    button.innerHTML = 'like';
    comment.innerHTML = 'Comment';
    likeBox.appendChild(span);
    likeBox.appendChild(button);
    movieBar.appendChild(likeBox);
    div.appendChild(movieBar);
    div.appendChild(comment);
    moviesContainer.appendChild(div);
  });
};

export default display;