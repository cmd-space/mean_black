var user = require('./../server/controllers/users.js');
// add another var here if more than one controller
module.exports = function(app){
    app.get('/users', function(req, res){
        user.show(req, res); 
    });
    // app.post
    app.post('/new_user', function(req, res){
    	user.add(req, res);
    });
}