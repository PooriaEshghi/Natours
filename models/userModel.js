const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            
        },
        email: {
            type: String,
            require: true,

        },
        photo: {
            type: String,

        },
        passwor: {
            type: String,
            require: true
        },
        passwordConfirm: {
            type: String,
            require: true
        }
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;