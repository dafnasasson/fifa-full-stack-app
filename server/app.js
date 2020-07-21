const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./mongo');
const playersRoute = require('./routes/players-routes');

//const initMongoPlayers = require('./initMongoPlayers');

const allPlayers = require('./data/dataManipulation');

//**** used to initialize the db with player data id the collections is empty ****/
//initMongoPlayers.createPlayers(allPlayers.players);

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');

	res.setHeader('Access-Control-Allow-Methods', '*');
	next();
});
app.use('/players', playersRoute);

app.use('/images',express.static('./resources/images'));


app.listen(5000);













// const fs = require('fs')
// const request = require('request')

// const download = (url, path, callback) => {
//   request.head(url, (err, res, body) => {
//     request(url)
//       .pipe(fs.createWriteStream(path))
//       .on('close', callback)
//   })
// }

// const url = 'https://cdn.sofifa.com/players/229/668/20_60.png'
// const path = './resources/images/test.png'

// download(url, path, () => {
//   console.log('✅ Done!')
// })