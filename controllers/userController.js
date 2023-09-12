const User = require('../models/userModel');

exports.testMe = (req, res, next) => {
  res.status(200).json({
    message: 'Hello meep',
  });
};

exports.createUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const user = await User.create({ name });

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};
