const mongoose = require('mongoose');

const spotSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    website: {
      type: String,
    },
    hours: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    details: {
      type: String,
    },
    level: {
      type: String,
      enum: ['כל הרמות', 'מתחילים', 'מתקדמים'],
    },
    equipment: {
      type: Boolean,
    },
    instructor: {
      type: Boolean,
    },
    group: {
      type: Boolean,
    },
    kids: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    parking: {
      type: Boolean,
    },
    shower: {
      type: Boolean,
    },
    toilet: {
      type: Boolean,
    },
    changing: {
      type: Boolean,
    },
    storage: {
      type: Boolean,
    },
    events: {
      type: Boolean,
    },
    lessons: {
      type: Boolean,
    },
    rentals: {
      type: Boolean,
    },
    shop: {
      type: Boolean,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
    waze: {
      type: String,
    },
  }, { timestamps: true }
);

module.exports = mongoose.model('Spot', spotSchema, 'spots');