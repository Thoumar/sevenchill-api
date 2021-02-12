const Event = require('./../../models/Event');

module.exports = (req, res) => {
	const { category } = req.query;

	Event.find({ category })
		.populate('members')
		.then(
			events => {
				res.status(200).send(events);
			},
			err => {
				res.status(400).send(err);
			}
		);
};