const updateCount = async () => {
  const movieCount = await document.querySelectorAll('.movie-card');
  return `(${movieCount.length})`;
};

module.exports = updateCount;