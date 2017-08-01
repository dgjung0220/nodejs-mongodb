var fs = require('fs');
var path = require('path');
var sidebar = require('../helpers/sidebar');
var Models = require('../models');
var md5 = require('MD5');

module.exports = {
    index: function(req, res) {
        res.render('image');
    },
    create: function(req, res) {
        console.log(req.file);

        var saveImage = function() {
            var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
            imgUrl = '';

            for (var i = 0; i < 6; i++) {
                imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            /*Models.Image.find({filename: imgUrl}, function(err, image) {
                if (image.length > 0) {
                    saveImage();
                } else {
                    var tempPath = req.file.path;
                    var ext = path.extname(req.file.name).toLowerCase();
                    var targetPath = path.resolve('./public/upload/' + imgUrl + ext);

                    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
                        fs.rename(tempPath, targetPath, function(err) {
                            if(err) {throw err;}

                            var newImg = new Models.Image({
                                title:req.body.title,
                                filename: imgUrl + ext,
                                description: req.body.description
                            });
                            newImg.save(function(err, image) {
                                console.log('Successfully inserted image : ' + image.filename);
                                res.redirect('/images/' + image.uniqueId);
                            });
                        });
                    } else {
                        fs.unlink(tempPath, function() {
                            if (err) throw err;
                            res.json(500, {error: 'Only image files are allowed.'});
                        })
                    }
                }
            })*/
        }      
        saveImage();
    },
    like: function(req, res) {
        res.send('The image:like POST controller');
    },
    comment: function(req, res) {
        res.send('The image:comment POST controller');
    }
};
