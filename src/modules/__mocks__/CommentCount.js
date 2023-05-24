const CommentCount = async () => {
  const comments = document.querySelectorAll('.commentli');
  const count = comments.length;
 
  console.log(comments);
  return count;
};

module.exports = CommentCount;