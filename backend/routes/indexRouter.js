const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers');

router.get('/', productsControllers.getAllProducts);
router.post('/new', productsControllers.postProducts);
router.post('/:x', productsControllers.getProductByName);

module.exports = router;
