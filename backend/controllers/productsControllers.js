const Product = require('../models/productsSchema');

// Create products => Admin
const postProducts = async (req, res) => {
  try {
    const storeProduct = await Product.create(req.body);
    res.status(201).json({
      storeProduct,
    });
  } catch (err) {
    console.log(err);
  }
};

// Fetch all products
const getAllProducts = async (req, res) => {
  try {
    const allProduct = await Product.find();
    console.log(allProduct);
    res.status(200).json({
      success: true,
      allProduct,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postProducts,
  getAllProducts,
};
