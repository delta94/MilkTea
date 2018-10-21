const express = require('express');
const router = express.Router();

const user = require('../controller/userController');
const product = require('../controller/productController');

router.post('/login', user.Login);
router.get('/Select_All_Product', product.Select_All_Product);
router.get('/Select_All_Meterial', product.Select_All_Meterial);


module.exports = router;
