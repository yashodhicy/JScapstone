const addcomment = async (appId, movieId, userComment) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movieId,
      username: userComment.userName,
      comment: userComment.comment,
    }),
  };

  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,
    options,
  );
  return response;
};

export default addcomment;