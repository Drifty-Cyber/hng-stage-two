const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Get All Users
router.route('/').get(userController.getAllUsers);

// Get User by ID or Name
router.get('/:param', userController.getUser);

// Create User
router.route('/').post(userController.createUser);

// Update and Delete User by ID or Name
router
  .route('/:param')
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
