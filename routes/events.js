const express = require('express');

const router = express.Router();
const auth = require('./../middlewares/auth');
const findAll = require('./../controllers/events/findAll');
const findOne = require('./../controllers/events/findOne');
const createOne = require('./../controllers/events/createOne');
const updateOne = require('./../controllers/events/updateOne');
const removeOne = require('./../controllers/events/removeOne');
const findSearch = require('./../controllers/events/findSearch');
const findPopular = require('./../controllers/events/findPopular');
const findRecent = require('./../controllers/events/findRecent');
const joinOne = require('./../controllers/events/joinOne');

router.use('*', auth, (req, res, next) => next());

router.get('/search', (req, res) => findSearch(req, res));
router.get('/popular', (req, res) => findPopular(req, res));
router.get('/recent', (req, res) => findRecent(req, res));
router.get('/', (req, res) => findAll(req, res));
router.get('/:id', (req, res) => findOne(req, res));
router.post('/', (req, res) => createOne(req, res));
router.patch('/:id', (req, res) => updateOne(req, res));
router.delete('/:id', (req, res) => removeOne(req, res));
router.post('/:id/join', (req, res) => joinOne(req, res));

module.exports = router;
