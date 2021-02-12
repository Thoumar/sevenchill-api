/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const server = require('../server');
const keys = require('../config/keys');
const Event = require('../models/Event')
const User = require('../models/User')

const eventOneId = new mongoose.Types.ObjectId()
const eventTwoId = new mongoose.Types.ObjectId()
const userThreeId = new mongoose.Types.ObjectId()

const eventOne = {
    _id: eventOneId,
    cover: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "App presentation",
    description: "We will present you our brand new app",
    address: {
        placeName: "40 rue des primevères",
        latitude: 4.567,
        longitude: 10.987,
    },
    beginningDate: "February 9, 2021",
    beginningTime: "4:00:00",
    endingDate: "February 9, 2021",
    endingTime: "5:00:00",
    category: "professionnal",
    members: [],
    roomId: null,
    owner: userThreeId
}

const eventTwo = {
    _id: eventTwoId,
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "The big festival",
    description: "This will be the best festival you've ever seen",
    address: {
        placeName: "12 avenue Anatole France",
        latitude: 1.123,
        longitude: 2.956,
    },
    beginningDate: "February 8, 2021",
    beginningTime: "10:00:00",
    endingDate: "February 8, 2021",
    endingTime: "12:00:00",
    category: "concerts_and_shows",
    members: [],
    roomId: null,
    owner: userThreeId
}

const userThree = {
    _id: userThreeId,
    firstName: "Thomas",
    lastName: "Anderson",
    email: 'thomasanderson@example.com',
    password: "thisismypassword",
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userThreeId, access: 'auth' }, keys.app.jwt.secret)
    }]
}

beforeAll(async () => {
    await Event.deleteMany();
    await new Event(eventOne).save();
    await new Event(eventTwo).save();
    await new User(userThree).save();
})


// GET /events
test('Should retrieve all events', async () => {
    await request(server)
        .get(`/users`)
        .set('x-auth', userThree.tokens[0].token)
        .set('Accept', 'application/json')
        .expect(200);
});

// GET /events/:id
test('Should retrieve all informations about a specific user', async () => {
    await request(server)
        .get(`/events/${userThreeId}`)
        .set('x-auth', userThree.tokens[0].token)
        .set('Accept', 'application/json')
        .expect(200);
});

// PATCH /events/:id
test('Should update informations about a specific event', async () => {
    await request(server)
        .patch(`/events/${userThreeId}`)
        .set('x-auth', userThree.tokens[0].token)
        .set('Accept', 'application/json')
        .send({ "title": "This is a new title from the patch route" })
        .expect(200);
});

// DELETE /events/id
test('Should delete a user', async () => {
    await request(server)
        .delete(`/events/${userThreeId}`)
        .set('x-auth', userThree.tokens[0].token)
        .expect(204);
});