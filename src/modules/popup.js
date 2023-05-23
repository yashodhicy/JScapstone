import comment from "./comment";

const popup = async (data,comments) => {
  const popupContainer = document.getElementById('popup-window');

  while (popupContainer.firstChild) {
    popupContainer.removeChild(popupContainer.firstChild);
  }
  popupContainer.index = data.id;
  console.log( popupContainer.index)
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

  const showComment = document.createElement('div');
  showComment.classList.add('showcomment');
  popupContainer.appendChild(showComment);


  const commentstitle = document.createElement('h2');
  showComment.appendChild(commentstitle);
  commentstitle.innerText ="Comments";

  const commentlist = document.createElement('ol');
  showComment.appendChild(commentlist);

  if(comments.length > 0) {
  comments.forEach(comment => {
    const commentEl = document.createElement('li');
    commentEl.innerHTML = ` 💬 ${comment.creation_date}  : ${comment.comment} by ${comment.username} `;
    showComment.appendChild(commentEl);
    
  }); 
  }
  else{
    const nocomments = document.createElement('p');
    nocomments.innerText ="No comments. You are the first.🤩"
    showComment.appendChild(nocomments);
  }

  const addComment = document.createElement('div');
  addComment.classList.add('addcomment');
  popupContainer.appendChild(addComment);

  const addCommentTitle = document.createElement('h2');
  addComment.appendChild(addCommentTitle);
  addCommentTitle.innerText ="Add a comments";

  const form = document.createElement('form');
  form.id = "form";
  addComment.appendChild(form);

  const inputName = document.createElement('input');
  inputName.id = "username";
  inputName.type = "text";
  inputName.placeholder ="your name";
  inputName.required;
  form.appendChild(inputName);

  const inputComment = document.createElement('input');
  inputComment.id = "usercomment";
  inputComment.type = "text";
  inputComment.placeholder ="your comment";
  inputComment.required;
  form.appendChild(inputComment);

  const submitbtn = document.createElement('button');
  submitbtn.classList.add('submitbtn');
  submitbtn.type = "submit";
  submitbtn.innerText ="comment";
  form.appendChild(submitbtn);

};

export default popup;