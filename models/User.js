const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        minlength: [6, 'minimum password length is 6 characters']
    },
});

//to fire a function after user is saved to db
userSchema.post('save', function (doc, next) {
    console.log('new user created & saved', doc);
    next();
});

//fire a function before a user/doc is saved to db
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    console.log('user about to be created', this)
    next();
});

//a static method to login users
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        //compares hashed password with og password
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email')
}


const User = mongoose.model('user', userSchema);

module.exports = User;