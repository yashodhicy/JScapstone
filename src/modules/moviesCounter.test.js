const updateCount = require('./moviesCounter.js');

describe('count movies', () => {
  document.body.innerHTML = `<div class='movie-card'>a</div>
<div class='movie-card'>b</div>
<div class='movie-card'>b</div>
<div class='movie-card'>a</div>
<div class='movie-card'>b</div>
<div class='movie-card'>a</div>`;

  it('count', async () => {
    expect(await updateCount()).toEqual('(6)');
  });
});
