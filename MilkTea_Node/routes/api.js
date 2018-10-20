const express = require('express');
const router = express.Router();

const user = require('../controller/userController');

router.get('/login', user.Login);

module.exports = router;
