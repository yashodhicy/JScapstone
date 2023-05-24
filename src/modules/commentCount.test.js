jest.mock('./CommentCount');
const commentcount = require('./CommentCount.js');

describe('show number of comment count', () => {
    document.body.innerHTML = `
    <li class='commentli'></li>
    <li class='commentli'></li>
    <li class='commentli'></li>
    `;
  
    it('Should return 3 comments,', async () => {
      expect(await commentcount()).toEqual(3);
    });
  });