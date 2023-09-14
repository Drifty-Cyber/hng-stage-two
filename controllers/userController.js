const User = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message,
    });
    console.log(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const name = req.body;
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
    console.log(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.params.name });
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message,
    });
    console.log(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate(
      { name: req.params.name },
      req.body
    );

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message,
    });
    console.log(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message,
    });
    console.log(err);
  }
};
