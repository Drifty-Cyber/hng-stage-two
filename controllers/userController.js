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
  }
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
    const param = req.params.param.trim();
    let user;

    if (/^[0-9a-fA-F]{24}$/.test(param)) {
      user = await User.findById(param);
    } else {
      user = await User.findOne({ name: { $regex: new RegExp(param, 'i') } });
    }

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    res.status(200).json({
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

exports.updateUser = async (req, res, next) => {
  try {
    const param = req.params.param.trim();
    let user;

    if (/^[0-9a-fA-F]{24}$/.test(param)) {
      user = await User.findByIdAndUpdate(param, req.body, { new: true });
    } else {
      user = await User.findOneAndUpdate(
        { name: { $regex: new RegExp(param, 'i') } },
        req.body,
        { new: true }
      );
    }

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    res.status(200).json({
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

exports.deleteUser = async (req, res, next) => {
  try {
    const param = req.params.param.trim();
    let user;

    if (/^[0-9a-fA-F]{24}$/.test(param)) {
      user = await User.findByIdAndRemove(param);
    } else {
      user = await User.findOneAndRemove({
        name: { $regex: new RegExp(param, 'i') },
      });
    }

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};
