const Event = require('./../../models/Event');

module.exports = (req, res) => {
    Event.findOneAndDelete({ _id: req.params.id }).then(
		() => {
			res.send(204);
		},
		err => {
			res.status(400).send(err);
		}
	);
};