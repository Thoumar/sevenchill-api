/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
const mongoose = require('mongoose');
const keys = require('./../config/keys');

const EventSchema = new mongoose.Schema({
    cover: {
        type: String,
        minlength: 1,
        trim: true,
        required: false,
        default() {
            return `${keys.app.baseUrl}/uploads/default_cover.png`;
        }
    },
    title: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    description: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    address: {
        placeName: {
            type: String,
            minlength: 1,
            trim: true,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    beginningDate: {
        type: Date,
        required: true
    },
    beginningTime: {
        type: String,
        required: true
    },
    endingDate: {
        type: Date,
        required: true
    },
    endingTime: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: [
            'concerts_and_shows',
            'gastronomy',
            'professionnal',
            'science_and_tech',
            'health_and_wellbeing',
            'performing_arts',
            'travel_and_outdoor',
            'community_and_cultural',
            'sport_and_fitness',
            'fashion_and_beauty',
            'family_and_education',
            'passions_and_leisure',
            'home_and_lifestyle',
            'charity',
            'religion_and_spirituality',
            'party_and_seasonal',
            'politics_and_government',
            'movies_and_entertainment',
            'other'
        ],
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
}
);


EventSchema.virtual('membersCount').get(function () {
    return this.members.length
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;