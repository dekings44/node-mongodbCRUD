//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to conect to mongodb server');
	}
	console.log('Connected to Mongodb server');
	const db = client.db('TodoApp');

	//deleteMany
	// db.collection('Todos')
	// 	.deleteMany({ text: 'Something to do' })
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	//DelectOne
	// db.collection('Todos')
	// 	.deleteOne({ text: 'this is morning' })
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	//findOneAnd Delete
	db.collection('Users')
		.findOneAndDelete({ name: 'Kings Okechukwu' })
		.then(result => {
			console.log(result);
		});

	//client.close();
});
