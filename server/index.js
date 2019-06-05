const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const MongoClient = require('mongodb').MongoClient

const app = express();

//configure db


app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.listen(8081, () => {

	console.log('listening on port 8081');
});

const url = 'mongodb://localhost/SurvivorDB';

// MongoClient.connect(url, function(err, db) {
// 	console.log('Connected to db');
// 	db.close();
// });

app.post('/createTeam', function(req,res) {
	console.log(req);
	res.send('got team')
});