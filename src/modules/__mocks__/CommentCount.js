const CommentCount = async () => {
  const comments = document.querySelectorAll('.commentli');
  const count = comments.length;
  return count;
};

module.exports = CommentCount;