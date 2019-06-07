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

app.post('/createLeague', function(req,res) {
	MongoClient.connect(url, function(err, db) {
		const database = db.db('Survivor');
		database.collection('leagueName').find({name: req.body.league}).toArray(function(err, results) {
			if(results.length > 0){
				res.send({message: 'Duplicate'});
			} else {
				database.collection('leagueName').insert({name: req.body.league}, function(err, result) {
					console.log(result)
					res.send({message:'League Created'});
				});
			}
		})
	});
	console.log(req.body);
	//res.send('got league')
});