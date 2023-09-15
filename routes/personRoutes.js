const express = require('express');
const personController = require('../controllers/personController');

const router = express.Router();

// Get All Persons
router.route('/').get(personController.getAllUsers);

// Get Person by Name
router.get('/:param', personController.getUser);

// Create Person
router.route('/').post(personController.createUser);

// Update and Delete Person by Name
router
  .route('/:param')
  .patch(personController.updateUser)
  .delete(personController.deleteUser);

module.exports = router;
