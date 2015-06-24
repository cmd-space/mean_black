var something = require('./../server/controllers/somethings.js');
// add another var here if more than one controller
module.exports = function(app){
    app.get('/something', function(req, res){
        something.show(req, res); 
    });
    // app.post
    app.post('/something_try', function(req, res){
    	something.add(req, res);
    });
}