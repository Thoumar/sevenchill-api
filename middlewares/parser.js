/* eslint-disable import/no-extraneous-dependencies */
const bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
};