var mongoose = require('mongoose');
var BucketSchema = new mongoose.Schema({
    title: String,
    description: String,
    tagged: String,
    user: String,
    user_id: String
});

mongoose.model('Bucket', BucketSchema);