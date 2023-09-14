const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Get All Users
router.route('/').get(userController.getAllUsers);

// Get User by ID
router.get('/:id', userController.getUser);

// Create User
router.route('/').post(userController.createUser);

// Update and Delete User by ID
router
  .route('/:id')
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// Get User by name
router.route('/name/:name').get(userController.getUserByName);

module.exports = router;
