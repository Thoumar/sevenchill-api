const keys = require('./../../config/keys');

module.exports = (req, res) => {
    if (req.file) {
        console.log('Upload - uploadOne: Enterring in route');
        console.log('Upload - uploadOne: Data in req.body :', req.body);
        const response = {
            pictureUrl: `${keys.app.uploadUrl}/public/${req.file.filename}`,
        };
        res.status(201).send(response);
    } else {
        const error = {
            err: 'Please provide a valid file'
        };
        console.log('Event - createOne: Failed to create new user, error is:', error);
        res.status(404).send(error);
    }
};