const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		require: [true, 'Please enter an Email'],
		unique: true,
		lowercase: true,
		validate: [isEmail, 'Please enter a Valid email'],
	},
	password: {
		type: String,
		require: [true, 'Please enter an password'],
		minlength: [6, 'Minimum password length is 6 characters'],
	},
});



// Firing a Function after A document is saved to the Database (DB)
userSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

//Static Method to login user model.
userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			return user;
		}
		throw Error('Incorrect Password');
	}
	throw Error('Incorrect Email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;
