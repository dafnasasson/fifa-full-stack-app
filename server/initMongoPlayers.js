const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://dafna:Ds201117827@players.hqacl.mongodb.net/players?retryWrites=true&w=majority';

const createPlayers = async (players) => {
	const client = new MongoClient(url);

	try {
		await client.connect();
		const db = client.db();
		db.collection('players').count((err, count) => {
			if (!err && count === 0) {
				const result = db.collection('players').insertMany(players, (err, data) => {
					client.close();
				});
				console.log('initializing db');
			} else {
				console.log('db already populated');
				client.close();
			}
		});
	} catch (error) {
		console.log(error);
	}
};

exports.createPlayers = createPlayers;
