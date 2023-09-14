const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Get All Users
router.route;

// Create User
router.route('/').post(userController.createUser);

// Get User by name
// router.get('/:name', userController.getUser);

// Update and Delete User
router
  .route('/:name')
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
