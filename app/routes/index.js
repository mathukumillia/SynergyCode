'use strict';

module.exports = function(app) {
    
    // Home route
    var index = require('../controllers/index');
    app.get('/', index.render);

    // Under development: route to upload profile pic when front end submits a pic
    app.post('/picUpload', function(req, res){
    	console.log('DEBUG: Picture Request Received');
    });

};
