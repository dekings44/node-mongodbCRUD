//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to conect to mongodb server');
	}
	console.log('Connected to Mongodb server');
	const db = client.db('TodoApp');

	//findOneAndUpdate method
	// db.collection('Todos')
	// 	.findOneAndUpdate(
	// 		{
	// 			_id: new ObjectID('5e30c6a1e5333c40ad05b77d')
	// 		},
	// 		{
	// 			$set: {
	// 				completed: true
	// 			}
	// 		},
	// 		{
	// 			returnOriginal: false
	// 		}
	// 	)
	// 	.then(result => {
	// 		console.log(result);
	//     });
	db.collection('Users')
		.findOneAndUpdate(
			{
				_id: new ObjectID('5e30c6a1e5333c40ad05b77e')
			},
			{
				$set: {
					name: 'Chisom Denzel Okechukwu',
					Location: 'Canada'
				},
				$inc: {
					age: 1
				}
			},

			{
				returnOriginal: false
			}
		)
		.then(result => {
			console.log(result);
		});

	//client.close();
});
