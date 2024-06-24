const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPostById,
  addCommentToPost
} = require('./postController');

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/:id/comment', addCommentToPost);

module.exports = router;
