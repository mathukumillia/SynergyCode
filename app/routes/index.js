'use strict';

module.exports = function(app) {
    
    // Home route
    var index = require('../controllers/index');
    app.get('/', index.render);
    app.post('/picUpload', function(req, res){
    	console.log('DEBUG: Picture Request Received');
    });

};
