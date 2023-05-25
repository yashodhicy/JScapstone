import getComments from './getcomments.js';

const refresh = async (appId, index) => {
  const comments = await getComments(appId, index);
  const list = document.querySelector('.commentlist');

  if (comments.length > 0) {
    list.innerHTML = '';
    comments.forEach((comment) => {
      const commentEl = document.createElement('li');
      commentEl.classList.add('commentli');
      commentEl.innerHTML = ` 💬 ${comment.creation_date}  : ${comment.comment} by ${comment.username} `;
      list.appendChild(commentEl);
    });
  } else {
    const nocomments = document.createElement('p');
    nocomments.innerText = 'No comments. You are the first.🤩';
    list.appendChild(nocomments);
  }
};

export default refresh;