const getMovie = async (Id) => {
  // Make the request.
  const response = await fetch(`https://api.tvmaze.com/shows/${Id}`);

  // Check the response status.
  if (response.status === 200) {
    // The request was successful.
    // Get the response data.
    const data = await response.json();
    return data;
    // Do something with the data.
    // ...
  }
  // The request failed.
  throw new Error(`Request failed with status code ${response.status}`);
};

export default getMovie;