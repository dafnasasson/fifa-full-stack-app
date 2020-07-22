const express = require('express');
//const players = require('../data/dataManipulation');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://dafna:Ds201117827@players.hqacl.mongodb.net/players?retryWrites=true&w=majority';

const getPlayers = async (req, res, next) => {
	const { minAge, maxAge, minWage, maxWage } = req.query;

	const client = new MongoClient(url);
	try {
		await client.connect();
		const db = client.db();
		playersFromDB = await db
			.collection('players').aggregate([
				{
					$match: {
						$and:
							[
								{ Wage: { $gte: parseInt(minWage) } },
								{ Wage: { $lte: parseInt(maxWage) } },
								{ Age: { $gte: parseInt(minAge) } },
								{ Age: { $lte: parseInt(maxAge) } }
							]
					}
				},
				{ $sample: { size: 30 } }
			])
			.toArray();
	} catch (error) {
		console.log('error');
		return res.json([]);
	}

	client.close();

	return res.json(playersFromDB);
};

router.get('/', getPlayers);

module.exports = router;
