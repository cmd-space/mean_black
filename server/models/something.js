var mongoose = require('mongoose');
var SomethingSchema = new mongoose.Schema({
    name: String
});

mongoose.model('Something', SomethingSchema);