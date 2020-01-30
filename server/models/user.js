const mongoose = require('mongoose');

//Creating model for users

const Users = mongoose.model('Users', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

// const user1 = new Users({
// 	email: 'denzel@gmail.com'
// });

// user1.save().then(
// 	doc => {
// 		console.log('Saved user', doc);
// 	},
// 	e => {
// 		console.log('user could not be created', e);
// 	}
// );

module.exports = { Users };
