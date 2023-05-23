const like = async (appId, movieId) => {
  console.log(movieId);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${movieId}`,
    }),
  };

  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,
    options,
  );
};

// const updateLike = async (appId, movieId) => {
//   const likes = await getLikes(appId);

//   let id = `${movieId}`

//    likes.forEach((movie,index)=>{
//         if (movie.item_id === id) {
//           //console.log(movie.likes)
//           return movie.likes
//         }
//     })
// };

export default like;