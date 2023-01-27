const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {
    try {
      const users = User.find()
      res.status(200).json({
        status: 'success',
        data:{
          users
        }
      })
    } catch (error) {
      
    }  
    res.status(500).json({
      statuss: 'error',
      message: 'This route is not yet defined!',
    });
  };
  
exports.createUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!',
    });
  };
  
exports.getUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(200).json({
      status: 'success',
      data:{
        newUser
      }
    })
  } catch (error) {
    
    res.status(500).json({
      statuss: 'error',
      message: 'This route is not yet defined!',
    });
  }

  };
  
exports.updateUser = (req, res) => {
    res.status(500).json({
      statuss: 'error',
      message: 'This route is not yet defined!',
    });
  };
exports.deleteUser = (req, res) => {
    res.status(500).json({
      statuss: 'error',
      message: 'This route is not yet defined!',
    });
  };
  