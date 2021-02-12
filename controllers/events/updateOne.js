const Event = require('./../../models/Event');

module.exports = (req, res) => {
    Event.findOneAndUpdate({ _id: req.params.id }, req.body).then(
		event => {
			res.status(200).send(event);
		},
		err => {
			res.status(400).send(err);
		}
	);
};