const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./mongo');
const playersRoute = require('./routes/players-routes');
const initMongoPlayers = require('./initMongoPlayers');
const allPlayers = require('./data/playersData');

//**** used to initialize the db with player data id the collections is empty ****/
initMongoPlayers.createPlayers(allPlayers.players);

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');

	res.setHeader('Access-Control-Allow-Methods', '*');
	next();
});
app.use('/players', playersRoute);

app.listen(5000);
