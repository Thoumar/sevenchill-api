const multer = require('multer');
const crypto = require('crypto');

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, './public/uploads');
	},
	filename(req, file, cb) {
		crypto.pseudoRandomBytes(16, (_err, raw) => {
			const extArray = file.mimetype.split("/");
			const extension = extArray[extArray.length - 1];
			cb(null, `${raw.toString('hex') + Date.now()}.${extension}`);
		});
	}
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage,
	fileFilter
});

module.exports = upload;