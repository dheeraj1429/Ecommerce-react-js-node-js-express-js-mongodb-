const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers');

router.get('/', productsControllers.getAllProducts);
router.post('/new', productsControllers.postProducts);

module.exports = router;
