const playersData = require('..data/playersData');
var request = require('request');
const players = playersData.players;
const fs = require('fs');


const download = (url, path, index) => {
    request.head(url, (err, res, body) => {
        if (!err) {
            request(url)
                .pipe(fs.createWriteStream(path))
                .on('close', () => { })
        } else {
            console.log(index);
        }

    })
}

//used this code to download images from URL and save them as png on the file system.

//let i = 0;
// players.forEach((player) => {
//     let id = player.Photo.split("/")[6].split(".")[0];
//     let idNewFormat = id.slice(0, 3) + "/" + id.slice(3, 6);
//     let picUrl = `https://cdn.sofifa.com/players/${idNewFormat}/19_60.png`;
//     i += 1;
//     setTimeout(() => download(picUrl, `${player.Index}.png`, player.Index), 70 * i);
// });



exports.players = players;