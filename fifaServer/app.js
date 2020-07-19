const express = require('express');
const bodyParser = require('body-parser');

const playersRoute = require('./routes/players-routes');

const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    res.setHeader('Access-Control-Allow-Methods', '*' );
    next();
})
app.use('/players', playersRoute);




app.listen(5000);