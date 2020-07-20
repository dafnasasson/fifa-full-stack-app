const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://dafna:Ds201117827@players.hqacl.mongodb.net/players?retryWrites=true&w=majority';

const createPlayer = async (req, res, next) => {
	const newPlayer = {
		name: 'guygul',
		age: 3
	};

	const client = new MongoClient(url);

	try {
		await client.connect();
		const db = client.db();
		const result = db.collection('players').insertOne(newPlayer);
	} catch (error) {
		return res.json({ messege: 'Could not store data.' });
	}

	client.close();
	res.json(newPlayer);
};

exports.createPlayer = createPlayer;
