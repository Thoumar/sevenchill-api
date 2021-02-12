const User = require('./../../models/User');
     
module.exports = (req, res) => {
    User.find().then(
		users => {
			res.status(200).send(users);
		},
		err => {
			res.status(400).send({ err });
		}
	);
};