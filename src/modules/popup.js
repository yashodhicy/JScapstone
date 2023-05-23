const popup = async (data) => {
  const popupContainer = document.getElementById('popup-window');

  while (popupContainer.firstChild) {
    popupContainer.removeChild(popupContainer.firstChild);
  }

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancel-btn');
  popupContainer.appendChild(cancelButton);

  const imageTitleDiv = document.createElement('div');
  imageTitleDiv.classList.add('imageTitleDiv');
  popupContainer.appendChild(imageTitleDiv);

  const image = document.createElement('img');
  const title = document.createElement('h2');
  image.alt = 'movie image';
  image.src = data.image.original;
  title.innerText = data.name;

  imageTitleDiv.appendChild(image);
  imageTitleDiv.appendChild(title);

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');
  popupContainer.appendChild(detailsDiv);

  const language = document.createElement('p');
  language.innerText = `Language :  ${data.language}`;
  detailsDiv.appendChild(language);

  const duration = document.createElement('p');
  duration.innerText = `Episode length :   ${data.averageRuntime}`;
  detailsDiv.appendChild(duration);

  const genre = document.createElement('p');
  genre.innerText = `Genres :  ${data.genres[0]}, ${data.genres[1]}`;
  detailsDiv.appendChild(genre);

  const status = document.createElement('p');
  status.innerText = `Genres : ${data.status}`;
  detailsDiv.appendChild(status);
};

export default popup;