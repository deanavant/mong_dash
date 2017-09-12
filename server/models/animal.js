var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');

var AnimalSchema = new mongoose.Schema({
 name: { type:String, required: true, minlength:3, maxlength:25},
 height: { type:Number, required: true},
 weight: { type:Number, required: true},
 info: { type:String, required: true, minlength:3, maxlength:50}
});
mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal');