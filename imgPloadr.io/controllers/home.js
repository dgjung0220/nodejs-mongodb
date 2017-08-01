var sidebar = require('../helpers/sidebar');

module.exports = {
    index: function(req, res) {
        
        var viewModel = {
            images: [
                {
                    uniqueId: 1,
                    title: 'Sample Image 1',
                    description: '',
                    filename: 'sample1.jpg',
                    views:0,
                    likes:0,
                    timestamp:Date.now
                },
                {
                    uniqueId: 1,
                    title: 'Sample Image 1',
                    description: '',
                    filename: 'sample1.jpg',
                    views:0,
                    likes:0,
                    timestamp:Date.now
                },
                {
                    uniqueId: 1,
                    title: 'Sample Image 1',
                    description: '',
                    filename: 'sample1.jpg',
                    views:0,
                    likes:0,
                    timestamp:Date.now
                },
                {
                    uniqueId: 1,
                    title: 'Sample Image 1',
                    description: '',
                    filename: 'sample1.jpg',
                    views:0,
                    likes:0,
                    timestamp:Date.now
                }
            ]
        };

        sidebar(viewModel, function(viewModel) {
              res.render('index', viewModel);
        })
    }
}
