const express = require('express');
const players = require('../data/playersData');
const router = express.Router();


router.get('/', (req,res,next)=>{
    console.log("get request");
    
    const {minAge, maxAge, minWage, maxWage} = req.query;;
    
    console.log(minAge, maxAge, minWage, maxWage);
    console.log("---------------------");
    res.json(players.slice(0,10));
});

router.post('/', (req,res,next)=>{
    console.log("post request");
    console.log("---------------------");
    console.log(req.body);
    console.log("---------------------");
    res.json({message: "my dicfddfk!"});
});







module.exports = router;