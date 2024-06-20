const asyncHandler = require('express-async-handler');
const Spot = require('../../models/spotModel');

// @desc    Get spots
// @route   GET /api/spot
// @access  Private
const getSpots = asyncHandler(async (req, res) => {
  const spot = await Spot.find(req.query.kind ? { kind: req.query.kind } : {});
  if (!spot) {
    res.status(400);
    throw new Error('Spots not found');
  }

  res.status(200).json(spot);
});

// @desc    Get spot by ID
// @route   GET /api/spot/:id
// @access  Private
const getSpotById = asyncHandler(async (req, res) => {
  const spot = await Spot.findById(req.params.id);
  if (!spot) {
    res.status(400);
    throw new Error('Spot not found');
  }

  res.status(200).json(spot);
});

// @desc    Get similar spots
// @route   GET /api/spot/similar/:kind
// @access  Private
const getSimilarSpots = asyncHandler(async (req, res) => {

  const spots = await Spot.find({ kind: req.params.kind });
  if (!spots) {
    res.status(400);
    throw new Error('Spot not found');
  }

  res.status(200).json(spots);
});

// @desc    Get spot search results
// @route   GET /api/spot/search
// @access  Private
const getSearchResults = asyncHandler(async (req, res) => {
  const searchTerm = req.query.term;

  // Build the query object
  const query = searchTerm ? {
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { tags: { $regex: searchTerm, $options: 'i' } }
    ]
  } : {};

  const results = await Spot.find(query);

  if (!results || results.length === 0) {
    res.status(404).json({ message: 'Spots not found' });
    return;
  }

  res.status(200).json(results);
});



module.exports = {
  getSpots,
  getSpotById,
  getSearchResults,
  getSimilarSpots
};
