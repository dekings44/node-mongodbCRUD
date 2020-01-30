const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// const newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// const newTodo3 = new Todo({
// 	text: 'Take Chisom to school in the morning'
// });

// newTodo3.save().then(
// 	doc => {
// 		console.log('Saved todo', doc);
// 	},
// 	e => {
// 		console.log('Unable to save todo');
// 	}
// );

module.exports = { Todo };
