const updateCount = require('./moviesCounter.js');

describe('show number of movies in the DOM', () => {
  document.body.innerHTML = `
  <div class='movie-card'>movie</div>
  <div class='movie-card'>movie</div>
  <div class='movie-card'>movie</div>
  `;

  it('Should return 3 movies,', async () => {
    expect(await updateCount()).toEqual('(3)');
  });
});
