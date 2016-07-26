const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');

mongoose.connect('mongodb://localhost:foodtrucks/foodtrucks');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));


const port = process.env.PORT || 3080;
const server = http.createServer(app);

app.use(function (req, res, next) {
    res.header("Content-Type",'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router(app);

server.listen(port);
console.log("Server listening on: ", port);
