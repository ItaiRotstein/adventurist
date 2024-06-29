const asyncHandler = require('express-async-handler');
const Spot = require('../../models/spotModel');

// @desc    Get spots
// @route   GET /api/spot
// @access  Private
const getSpots = asyncHandler(async (req, res) => {
  const spot = await Spot.find(req.query.type ? { type: req.query.type } : {});
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
// @route   GET /api/spot/similar/:type
// @access  Private
const getSimilarSpots = asyncHandler(async (req, res) => {

  const spots = await Spot.find({ type: req.params.type });
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
  const { term, type, region } = req.query;

  let query = {};
  if (term) {
    const words = term.split(/\s+/);
    query.$or = [
      ...words.map(word => ({ name: { $regex: word, $options: 'i' } })),
      ...words.map(word => ({ tags: { $regex: word, $options: 'i' } }))
    ];
  }
  if (type) {
    query.type = type;
  }
  if (region) {
    query.region = region;
  }

  const results = await Spot.find(query);

  if (!results) {
    res.status(404).json({ message: 'Spots not found' });
    return;
  }

  res.status(200).json(results);
});

// @desc    Get all types
// @route   GET /api/spot/types
// @access  Private
const getAllTypes = async (req, res) => {
  try {
    const types = await Spot.aggregate([
      {
        $unwind: "$type" // Unwind the type array to treat each element as a separate document
      },
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 } // Optional: Sort the types alphabetically
      }
    ]);


    if (!types || types.length === 0) {
      res.status(404).json({ message: 'No types found' });
      return;
    }

    // Transform the result to return an array of types only
    const typeList = types.map(type => type._id);

    res.status(200).json(typeList);
  } catch (error) {
    console.error('Failed to get types:', error);
    res.status(500).json({ message: 'Failed to get types' });
  }
};



module.exports = {
  getSpots,
  getSpotById,
  getSearchResults,
  getSimilarSpots,
  getAllTypes
};
