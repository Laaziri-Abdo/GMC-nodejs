const mongoose = require('mongoose');
const User = mongoose.model('User', {
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    age: {
        type: Number,
    },
    numPhone: {
        type: Number,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    }
})
module.exports = User;