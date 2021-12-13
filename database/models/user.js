const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const userSchema = schema({
    local: {
        email: { type: String, required: true, unique: true },
        emailVerify: {type: Boolean, default: false},
        emailToken: {type: String},
        password: { type: String, required: true },
        passwordToken: {type: String},
        passwordTokenExpiration: {type: Date},
    },
    username: { type: String, required: true, unique: true },
    avatar: {type: String, default: '/images/zombiiie.png'},
    following: {type: [schema.Types.ObjectId], ref:'user'},
});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
}

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.local.password)
}

const User = mongoose.model('user', userSchema);

module.exports = User;
