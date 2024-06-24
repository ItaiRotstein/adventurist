const asyncHandler = require('express-async-handler');
const Post = require('../../models/postModel');

// @desc    Get posts
// @route   GET /api/post
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const post = await Post.find();

  if (!post) {
    res.status(400);
    throw new Error('Posts not found');
  }
  res.status(200).json(post);
});

// @desc    Get post by Id
// @route   GET /api/post
// @access  Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }
  res.status(200).json(post);
});

// @desc    Add comment to post
// @route   POST /api/post/:id/comment
// @access  Public
const addCommentToPost = asyncHandler(async (req, res) => {
  const { commentData } = req.body;
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
    }
    post.comments.push(commentData);
    await post.save();
  res.status(200).json(post);
});

module.exports = {
  getPosts,
  getPostById,
  addCommentToPost
};
