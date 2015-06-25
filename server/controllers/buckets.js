var mongoose = require('mongoose');
var Bucket = mongoose.model('Bucket');

module.exports = (function(){
	return{
		show: function(req, res){
			Bucket.find({user: req.body._id}, function(err, results){
				if(err){
					console.log(err);
				} else{
					res.json(results);
				}
			});
		},
		add: function(req, res){
			var newBucket = new Bucket({title: req.body.title, description: req.body.description, tagged: req.body.tagged, user: req.body.name, user_id: req.body.user_id});
			newBucket.save(function(err, results){
				if(err){
					console.log(err);
				} else{
					Bucket.find({}, function(err, results){
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