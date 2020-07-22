const playersData = require('./playersData');
const players = playersData.players;

players.forEach((player) => {
    player.Wage = parseInt(player.Wage.replace(/\D/g, ''));
    let id = player.Photo.split("/")[6].split(".")[0];
    let idNewFormat = id.slice(0, 3) + "/" + id.slice(3, 6);
    player.Photo =  `https://cdn.sofifa.com/players/${idNewFormat}/19_60.png`;
});



exports.players = players;