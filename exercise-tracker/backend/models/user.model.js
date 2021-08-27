const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    //has only a single field 
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, //trim white space of the end
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;