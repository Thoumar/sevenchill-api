const Event = require('./../../models/Event');
const User = require('./../../models/User');

module.exports = (req, res) => {
    console.log("tried to join")
    console.log(req.params.id)
    console.log(req.user)
    Event.findOneAndUpdate({
        _id: req.params.id
    }, {
        $push: {
            members: req.user.id
        }
    }).then(
        event => {
            User.findOneAndUpdate({
                _id: req.user.id
            }, {
                $push: {
                    joinedEvents: event.id
                }
            }).then(
                () => {
                    res.status(200).send(event);
                }, err => {
                    res.status(400).send(err);
                });
        },
        err => {
            res.status(400).send(err);
        }
    );
};