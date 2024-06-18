const express = require('express');
const router = express.Router();
const {
  sendContactEmail,
} = require('./emailController');

router.route('/').get(sendContactEmail);

module.exports = router;
