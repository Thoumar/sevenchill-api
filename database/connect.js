const mongoose = require('mongoose');
const keys = require('./../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.app.databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }).then(
	() => {
		console.log('Successfully connected to database');
	},
	() => {

	}
);