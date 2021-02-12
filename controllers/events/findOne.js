const Event = require('./../../models/Event');

module.exports = (req, res) => {
    Event.findOne({ _id: req.params.id }).populate('room').then(
		event => {
			res.send(event);
		},
		err => {
			res.status(400).send(err);
		}
	);
};