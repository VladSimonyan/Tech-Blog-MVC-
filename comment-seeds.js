const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Great",
   
  },
  {
    comment_text: "Nice",
    
  },
  {
    comment_text: "Sick",
    
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
