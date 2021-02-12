/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId
    },
    messages: [
        {
            content: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
);


RoomSchema.methods.toJSON = function () {
    const room = this;
    const roomObject = room.toObject();

    delete roomObject._id;

    return roomObject;
};

const Room = mongoose.model('Room', RoomSchema);
module.exports = Room;