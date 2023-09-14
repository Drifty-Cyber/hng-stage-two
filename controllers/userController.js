const User = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users)
      return res.status(404).json({
        status: 'error',
        message: 'No person found with that ID',
      });

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
    // console.log(err);
  }

  //   try {
  //     const { name } = req.query;
  //     let query = {};
  //     if (name) {
  //       query = { name };
  //     }
  //     const users = await User.find(query);
  //     res.status(200).json({
  //       status: 'success',
  //       data: {
  //         users,
  //       },
  //     });
  //   } catch (error) {
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
};

exports.createUser = async (req, res, next) => {
  try {
    // const name = req.body;
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
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
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
    // console.log(err);
  }
};

exports.getUserByName = async (req, res, next) => {
  try {
    const name = req.params.name.trim();
    console.log(name);
    const user = await User.find({ name: req.params.name });

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
    console.log(err.message);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

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
