const {loginController ,getUserData} = require('../controller/userController');
const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router();

router.post("/login" , loginController);
router.get('/get' ,verifyToken, getUserData )
module.exports = router