const express = require('express');
const router = express.Router();
const {
  getSpots,
  getSpotById,
  getSearchResults,
  getSimilarSpots,
  getAllTypes
} = require('./spotController');

router.get('/', getSpots);
router.get('/search', getSearchResults);
router.get('/types', getAllTypes);
router.get('/:id', getSpotById);
router.get('/type/:type', getSimilarSpots);


module.exports = router;
