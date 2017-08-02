var path = require('path');
var express = require('express');
var router = express.Router();
var home = require('../controllers/home');
var image = require('../controllers/image');
var multer = require('multer');
var upload = multer({ dest: path.join(__dirname, 'public/upload/temp')});

router.get('/', home.index);
router.get('/images/:image_id', image.index);
router.post('/images',upload.single('file'), image.create);
router.post('/images/:image_id/like', image.like);
router.post('/images/:image_id/comment', image.comment);

module.exports = router;