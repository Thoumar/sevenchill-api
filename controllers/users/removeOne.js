const User = require('./../../models/User');

module.exports = (req, res) => {
	User.findOneAndDelete({ _id: req.params.id }).then(
		user => {
			res.status(201).send(user);
		},
		err => {
			res.status(400).send(err);
		}
	);
};