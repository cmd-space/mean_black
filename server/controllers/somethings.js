var mongoose = require('mongoose');
var Something = mongoose.model('Something');

module.exports = (function(){
    return{
        show: function(req, res){
            Something.find({}, function(err, results){
                if(err){
                    console.log(err);
                } else{
                    res.json(results);
                }
            });
        },
        add: function(req, res){
            var newSomething = new Something({name: req.body.name});
            newSomething.save(function(err, results){
                if(err){
                    console.log(err);
                } else{
                    Something.find({}, function(err, results){
                        if(err){
                            console.log(err);
                        } else{
                            res.json(results);
                        }
                    });
                }
            });
        }
    }
})();