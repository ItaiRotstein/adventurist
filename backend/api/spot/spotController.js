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
  const { term, kind, region } = req.query; 

  let query = {};
  if (term) {
    const words = term.split(/\s+/);
    query.$or = [
      ...words.map(word => ({ name: { $regex: word, $options: 'i' } })),
      ...words.map(word => ({ tags: { $regex: word, $options: 'i' } }))
    ];
  }
  if (kind) {
    query.kind = kind;
  }
  if (region) {
    query.area = region;
  }

  const results = await Spot.find(query);

  if (!results) {
    res.status(404).json({ message: 'Spots not found' });
    return;
  }

  res.status(200).json(results);
});

// @desc    Get all kinds
// @route   GET /api/spot/kinds
// @access  Private
const getAllKinds = async (req, res) => {
  try {
    const kinds = await Spot.aggregate([
      {
        $group: {
          _id: "$kind",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 } // Optional: Sort the kinds alphabetically
      }
    ]);


    if (!kinds || kinds.length === 0) {
      res.status(404).json({ message: 'No kinds found' });
      return;
    }

    // Transform the result to return an array of kinds only
    const kindList = kinds.map(kind => kind._id);

    res.status(200).json(kindList);
  } catch (error) {
    console.error('Failed to get kinds:', error);
    res.status(500).json({ message: 'Failed to get kinds' });
  }
};



module.exports = {
  getSpots,
  getSpotById,
  getSearchResults,
  getSimilarSpots,
  getAllKinds
};
