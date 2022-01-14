const Product = require('../models/productsSchema');

// Create products => Admin
const postProducts = async (req, res) => {
  console.log(`post product`);
  try {
    const storeProduct = await Product.create(req.body);
    console.log(req.body);
    if (storeProduct) {
      res.status(201).json({
        success: true,
        result: 'Product Added into the store',
      });
    } else {
      res.status(400).json({
        success: false,
        result: 'someting woring',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Fetch all products => User
const getAllProducts = async (req, res) => {
  try {
    const allProduct = await Product.find();

    if (allProduct) {
      res.status('200').json({
        success: true,
        allProduct,
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// featch product by name => User
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
      res.status(400).json({
        success: false,
      });
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
