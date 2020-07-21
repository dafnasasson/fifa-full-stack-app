const playersData = require('./playersData');
var request = require('request');
const players= playersData.players;
let i = 0;
const fs = require('fs');

const manipulatePlayer =  (player) => {
    player.Wage = parseInt(player.Wage.replace(/\D/g, ''));
    let id = player.Photo.split("/")[6].split(".")[0];
    let idNewFormat = id.slice(0,3) + "/" + id.slice(3,6);
    let picUrl = `https://cdn.sofifa.com/players/${idNewFormat}/19_60.png`;
    i += 1;
    setTimeout(()=>download(picUrl, `${player.Index}.png`), 1000* i);
        //()=>
    // {
    //     request.get(picUrl, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
            
    //         // data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
    //         console.log("\n\n\nbody");
    //         console.log(body);
    //         console.log("body\n\n");
    //         player.Photo = data;
    //         console.log("--------------\n");
    //         console.log(picUrl);
    //         console.log(player.Photo.slice(0,50));
            
    //         fs.writeFile(`${player.ID}.png`,body, ()=>{console.log("whaaa")});
    //         console.log("--------------\n");
    //     }else{
    //         console.log("************");
    //         console.log(picUrl);
    //         console.log(error);
    //         console.log("************");
    //     };
    // })
    // }
  

}


const download = (url, path,index) => {
    request.head(url, (err, res, body) => {
        if(!err){
            request(url)
            .pipe(fs.createWriteStream(path))
            .on('close', ()=>{})
        }else{
            console.log(index);
        }

    })
  }

// players.slice(17327,18207).forEach((player) => {
//     player.Wage = parseInt(player.Wage.replace(/\D/g, ''));
//     let id = player.Photo.split("/")[6].split(".")[0];
//     let idNewFormat = id.slice(0,3) + "/" + id.slice(3,6);
//     let picUrl = `https://cdn.sofifa.com/players/${idNewFormat}/19_60.png`;
//     i += 1;
//     setTimeout(()=>download(picUrl, `${player.Index}.png`, player.Index), 70* i);
//     });
    


exports.players = players;