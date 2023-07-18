const { Post } = require('../models');

const postData = [
  {
    title: 'Obfhs',
    content: 'ABsdbs jfjsi sdb sn..',
    
    
  },
  {
    title: 'dfd fsdfd',
    content: 'dfnjd jhfdbfjkhdb nhdbs.',
    
  },
  {
    title: 'Adfsdf',
    content: 'fdbhjhfs hdbfhis hndbifhs.',
    
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
