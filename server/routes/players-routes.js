const express = require('express');
const players = require('../data/playersData');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://dafna:Ds201117827@players.hqacl.mongodb.net/players?retryWrites=true&w=majority';
const wageRangeOfPlayersInMemory = null;

const getPlayers = async (req, res, next) => {
	console.log('get request');

	const { minAge, maxAge, minWage, maxWage } = req.query;

	const client = new MongoClient(url);
	let playersFromDB;
	try {
		await client.connect();
		const db = client.db();
		playersFromDB = await db
			.collection('players')
			.find({
				$and: [
					{ Age: { $gte: parseInt(minAge) } },
					{ Age: { $lte: parseInt(maxAge) } },
					{ Wage: { $gte: parseInt(minWage) } },
					{ Wage: { $lte: parseInt(maxWage) } }
				]
			})
			.toArray();
		console.log('--------players from DB--------');
		console.log(playersFromDB);
	} catch (error) {
		return res.json({ messege: 'Could not store data.' });
	}

	client.close();
	res.json(playersFromDB.slice(0, 30));
};

router.get('/', getPlayers);

module.exports = router;
