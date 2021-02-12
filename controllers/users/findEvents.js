const Event = require('./../../models/Event');

module.exports = (req, res) => {
	Event.find({
		"members": {
			_id: req.user.id
		}
	}).populate('members').then(
		events => {
			res.send(events);
		},
		err => {
			res.status(400).send({ err });
		}
	);
};
