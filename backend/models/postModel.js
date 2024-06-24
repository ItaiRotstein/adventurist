const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const postSchema = mongoose.Schema({
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  wordCount: {
    type: Number,
  },
  img: {
    type: String,
  },
  comments: [commentSchema],
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema, 'posts');