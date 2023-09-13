const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Create User
router.route('/createUser').post(userController.createUser);

// Get User
router.get('/getMe', userController.testMe);

// Update and Delete User
router
  .route('/:id')
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
