const express = require('express');
const players = require('../data/playersData');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://dafna:Ds201117827@players.hqacl.mongodb.net/players?retryWrites=true&w=majority';
const wageInMemory = { isInMemory: false };
let playersFromDB = [];

const getPlayers = async (req, res, next) => {
	const { minAge, maxAge, minWage, maxWage } = req.query;
	if (!wageInMemory.isInMemory || minWage != wageInMemory.min || maxWage != wageInMemory.max) {
		wageInMemory.min = minWage;
		wageInMemory.max = maxWage;
		wageInMemory.isInMemory = true;

		const client = new MongoClient(url);

		try {
			await client.connect();
			const db = client.db();
			playersFromDB = await db
				.collection('players')
				.find({
					$and: [ { Wage: { $gte: parseInt(minWage) } }, { Wage: { $lte: parseInt(maxWage) } } ]
				})
				.toArray();
		} catch (error) {
			return res.json({ messege: 'Could not get data.' });
		}

		client.close();
	}
	//get players in relevant ages
	let playersByAge = playersFromDB.filter((player) => player.Age >= minAge && player.Age <= maxAge);

	playersByAge = playersByAge.sort(() => Math.random() - Math.random()).slice(0, 30);
	return res.json(playersByAge);
};

router.get('/', getPlayers);

module.exports = router;
