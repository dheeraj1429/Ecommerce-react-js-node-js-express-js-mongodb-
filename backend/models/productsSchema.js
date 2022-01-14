const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter the product name'],
    trim: true,
  },
  discription: {
    type: String,
    required: [true, 'please enter the product discription'],
  },
  gender: {
    type: String,
    default: 'both',
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'please enter the product price'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  image: [
    {
      public_id: {
        type: Number,
        required: [true, 'please enter the id'],
      },
      url: {
        type: String,
        required: [true, 'please enter the image url'],
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'please selecte category'],
  },
  stock: {
    type: Number,
    default: 1,
    maxlength: [4, 'max charecter'],
  },
  review: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = new mongoose.model('AllProduct', productSchema);

module.exports = Product;
