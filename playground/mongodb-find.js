//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to conect to mongodb server');
	}
	console.log('Connected to Mongodb server');
	const db = client.db('TodoApp');

	// db.collection('Todos')
	// 	.find({ completed: true })
	// 	.toArray()
	// 	.then(
	// 		docs => {
	// 			console.log('Todos');
	// 			console.log(JSON.stringify(docs, undefined, 2));
	// 		},
	// 		err => {
	// 			console.log('Unable to fetch todos', err);
	// 		}
	// 	);

	db.collection('Users')
		.find({ name: 'Kings Okechukwu' })
		.toArray()
		.then(docs => {
			console.log(JSON.stringify(docs, undefined, 2));
		});

	//client.close();
});
