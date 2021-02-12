const express = require('express');

const router = express.Router();

const uploadOne = require('./../controllers/uploads/uploadOne');
const auth = require('./../middlewares/auth');
const upload = require('./../config/upload');

router.use('/*', auth, (req, res, next) => next());

router.post('/', upload.single('image'), (req, res) => uploadOne(req, res));

module.exports = router;
