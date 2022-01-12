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

// featch product by name
const getProductByName = async (req, res) => {
  try {
    const { x } = req.params;
    console.log(req.body);
    const findProductByName = await Product.find({ name: x });
    console.log(findProductByName);

    if (findProductByName.length > 0) {
      res.status(200).json({
        success: true,
        findProductByName,
      });
    } else {
      res.status(400).send('no product found');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postProducts,
  getAllProducts,
  getProductByName,
};
