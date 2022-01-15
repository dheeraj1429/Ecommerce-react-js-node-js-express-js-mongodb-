const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers');

router.post('/', productsControllers.getAllProducts);
router.post('/new', productsControllers.postProducts);
router.post('/get/:x', productsControllers.getProductByName);
router.get('/api/v1', productsControllers.getAllProductApi);

module.exports = router;
