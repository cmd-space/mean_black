var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
    return{
        show: function(req, res){
            User.find({}, function(err, results){
                if(err){
                    console.log(err);
                } else{
                    res.json(results);
                }
            });
        },
        add: function(req, res){
            var newUser = new User({name: req.body.name});
            newUser.save(function(err, results){
                if(err){
                    console.log(err);
                } else{
                    User.find({_id: results._id}, function(err, results){
                        if(err){
                            console.log(err);
                        } else{
                            res.json(results);
                        }
                    });
                }
            });
        },
        findOne: function(req, res){
            User.find({_id: req.body.id}, function(err, result){
                if(err){
                    console.log(err);
                } else{
                    res.json(result);
                }
            })
        }
    }
})();