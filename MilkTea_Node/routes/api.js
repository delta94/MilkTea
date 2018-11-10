const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        cb(null, new Date().setUTCMilliseconds() + file.originalname)
    }
})

const upload = multer({ 
    storage: storage,
    limits:{
        fieldSize: 1024 * 1024 * 5 
    }
})

const user = require('../controller/userController');
const product = require('../controller/productController');
const milktea = require('../controller/milkteaController');
const bill = require('../controller/billController');

router.post('/login', user.Login);
router.post('/loginA', user.LoginA);
router.get('/Select_All_Product', product.Select_All_Product);
router.get('/Select_All_Meterial', product.Select_All_Meterial);
router.post('/Insert_Meterial', product.Insert_Meterial);
router.post('/Delete_Meterial', product.Delete_Meterial);
router.post('/Update_Meterial', product.Update_Meterial);

router.get('/Select_All_MilkTea', milktea.Select_All_MilkTea);
router.post('/Insert_MilkTea', upload.single('recfile'), milktea.Insert_MilkTea);
router.post('/Delete_MilkTea', milktea.Delete_MilkTea);
router.post('/Update_MilkTea', milktea.Update_MilkTea);
router.post('/Insert_Bill', bill.Insert_Bill);
router.post('/Insert_Detail_Bill', bill.Insert_Detail_Bill);
router.post('/Select_Material_Of_MilkTea', milktea.Select_Material_Of_MilkTea);


module.exports = router;
