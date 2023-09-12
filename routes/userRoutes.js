const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/getMe', userController.testMe);
router.route('/createUser').post(userController.createUser);

module.exports = router;
