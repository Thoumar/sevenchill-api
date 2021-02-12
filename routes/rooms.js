const express = require('express');

const router = express.Router();
const auth = require('./../middlewares/auth');
const findAll = require('./../controllers/rooms/findAll');
const findOne = require('./../controllers/rooms/findOne');
const createOne = require('./../controllers/rooms/createOne');
const updateOne = require('./../controllers/rooms/updateOne');
const removeOne = require('./../controllers/rooms/removeOne');

router.use('/*', auth, (req, res, next) => next());

router.get('/', (req, res) => findAll(req, res));
router.get('/:id', (req, res) => findOne(req, res));
router.post('/', (req, res) => createOne(req, res));
router.patch('/:id', (req, res) => updateOne(req, res));
router.delete('/:id', (req, res) => removeOne(req, res));

module.exports = router;
