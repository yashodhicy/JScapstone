const CommentCount = async () => {
  const title = document.querySelector('.titlecomments');
  const comments = document.querySelectorAll('.commentli');
  const count = comments.length;
  if (count > 0) {
    title.innerText = `Comments (${count})`;
  }
};

export default CommentCount;