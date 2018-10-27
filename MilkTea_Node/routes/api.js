const express = require('express');
const router = express.Router();

const user = require('../controller/userController');
const product = require('../controller/productController');
const milktea = require('../controller/milkteaController');


router.post('/login', user.Login);
router.get('/Select_All_Product', product.Select_All_Product);
router.get('/Select_All_Meterial', product.Select_All_Meterial);
router.post('/Insert_Meterial', product.Insert_Meterial);
router.post('/Delete_Meterial', product.Delete_Meterial);
router.post('/Update_Meterial', product.Update_Meterial);

router.get('/Select_All_MilkTea', milktea.Select_All_MilkTea);
router.post('/Insert_MilkTea', milktea.Insert_MilkTea);
router.post('/Delete_MilkTea', milktea.Delete_MilkTea);
router.post('/Update_MilkTea', milktea.Update_MilkTea);


module.exports = router;
