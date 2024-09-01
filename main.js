const express = require('express');
const app = express();

const posts = [
  {
    id: '1',
    title: 'First post',
    content: 'This is the first post.',
    tags: ['tag1', 'tag2']
  },
  {
    id: '2',
    title: 'Second post',
    content: 'This is the second post.',
    tags: ['tag2', 'tag3']
  },
  {
    id: '3',
    title: 'Third post',
    content: 'This is the third post.',
    tags: ['tag3', 'tag4']
  }
];

function getPostsByTags(tags) {
  if (!tags || tags.length === 0) {
    return [];
  }

  // Convert tags to an array if it's a single string
  const tagsArray = Array.isArray(tags) ? tags : [tags];

  // Filter posts that contain at least one of the specified tags
  return posts.filter(post => post.tags.some(tag => tagsArray.includes(tag)));
}

app.get('/posts', (req, res) => {
  const tags = req.query.tags;
  const filteredPosts = getPostsByTags(tags);
  res.json(filteredPosts);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
