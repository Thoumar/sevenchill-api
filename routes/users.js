const express = require('express');

const router = express.Router();

const auth = require('./../middlewares/auth');
const findAll = require('./../controllers/users/findAll');
const findOne = require('./../controllers/users/findOne');
const updateOne = require('./../controllers/users/updateOne');
const removeOne = require('./../controllers/users/removeOne');
const findMe = require('./../controllers/users/findMe');
const findEvents = require('./../controllers/users/findEvents');

router.use('/*', auth, (req, res, next) => next());
router.get('/me', (req, res) => findMe(req, res));
router.get('/:id/events', (req, res) => findEvents(req, res));
router.get('/', (req, res) => findAll(req, res));
router.get('/:id', (req, res) => findOne(req, res));
router.patch('/:id', (req, res) => updateOne(req, res));
router.delete('/:id', (req, res) => removeOne(req, res));

module.exports = router;
