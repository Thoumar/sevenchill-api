const Event = require('./../../models/Event');

module.exports = (req, res) => {
	Event.find().populate('members').then(
		events => {
			console.log(events[0].members)
			res.status(200).send(events);
		},
		err => {
			res.status(400).send(err);
		}
	);
};