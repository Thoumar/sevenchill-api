/* eslint-disable no-underscore-dangle */
const Event = require('./../../models/Event');
const Room = require('./../../models/Room');

module.exports = (req, res) => {
	const event = Event(req.body);
	event.save().then(
		(newEvent) => {
			// const room = Room({
			// 	eventId: newEvent._id,
			// 	creator: req.user._id,
			// 	messages: []
			// });
			// room.save().then(
			// 	() => {
			// 		console.log('Event - createOne: Successfully created new event with data :', newEvent);
			// 		res.status(201).send(newEvent);
			// 	},
			// 	err => {
			// 		console.log('Event - createOne: Failed to create new user, error is:', err);
			// 		res.status(400).send(err);
			// 	});
			res.status(201).send(newEvent);
		},
		err => {
			console.log('Event - createOne: Failed to create new user, error is:', err);
			res.status(400).send(err);
		}
	);
};