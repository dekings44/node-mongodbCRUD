//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to conect to mongodb server');
	}
	console.log('Connected to Mongodb server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne(
	// 	{
	// 		text: 'Something to do',
	// 		completed: false
	// 	},
	// 	(err, result) => {
	// 		if (err) {
	// 			return console.log('Unable to insert todo', err);
	// 		}
	// 		console.log(JSON.stringify(result.ops, undefined, 2));
	// 	}
	// );

	// db.collection('Users').insertOne(
	// 	{
	// 		name: 'Kings Okechukwu',
	// 		Location: 'Port Harcourt Rivers State',
	// 		age: 36
	// 	},
	// 	(err, result) => {
	// 		if (err) {
	// 			return console.log('Unable to insert todo', err);
	// 		}
	// 		console.log(JSON.stringify(result.ops, undefined, 2));
	// 	}
	// );

	client.close();
});
