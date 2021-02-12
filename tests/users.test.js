/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const server = require('./../server');
const keys = require('./../config/keys');
const User = require('./../models/User')

const userOneId = new mongoose.Types.ObjectId()
const userTwoId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    firstName: "John",
    lastName: "Toe",
    email: 'johntoe@example.com',
    password: "thisismypassword",
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, keys.app.jwt.secret)
    }]
}

const userTwo = {
    _id: userTwoId,
    firstName: "Lea",
    lastName: "Toe",
    email: 'leatoe@example.com',
    password: "thisismypassword",
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userTwoId, access: 'auth' }, keys.app.jwt.secret)
    }]
}

beforeAll(async () => {
    await User.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
})

// GET /users/me
test('Should retrieve all informations about the current user', async () => {
    const response = await request(server)
        .get(`/users/me`)
        .set('x-auth', userOne.tokens[0].token)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

    expect(response.body).not.toBeNull();
    expect(response.body).not.toBeUndefined();
});

// GET /users/:id/events
test('Should retrieve all events created by the current user', async () => {
    await request(server)
        .get(`/users/${userOneId}/events`)
        .set('x-auth', userOne.tokens[0].token)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
});

// GET /users
test('Should retrieve all users', async () => {
    await request(server)
        .get(`/users`)
        .set('x-auth', userOne.tokens[0].token)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
});

// GET /users/:id
test('Should retrieve all informations about a specific user', async () => {
    await request(server)
        .get(`/users/${userTwoId}`)
        .set('x-auth', userOne.tokens[0].token)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
});

// PATCH /users/:id
test('Should update informations about a specific user', async () => {
    await request(server)
        .patch(`/users/${userTwoId}`)
        .set('x-auth', userOne.tokens[0].token)
        .set('Accept', 'application/json')
        .send({ "firstName": "Paulo" })
        .expect('Content-Type', /json/)
        .expect(200);
});

// DELETE /users/id
test('Should delete a user', async () => {
    await request(server)
        .delete(`/users/${userOneId}`)
        .set('x-auth', userOne.tokens[0].token)
        .expect('Content-Type', /json/)
        .expect(201);

});