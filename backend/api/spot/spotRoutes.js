const express = require('express');
const router = express.Router();
const {
  getSpots,
  getSpotById,
  getSearchResults,
  getSimilarSpots,
  getAllKinds
} = require('./spotController');

router.get('/', getSpots);
router.get('/search', getSearchResults);
router.get('/kinds', getAllKinds);
router.get('/:id', getSpotById);
router.get('/kind/:kind', getSimilarSpots);


module.exports = router;
