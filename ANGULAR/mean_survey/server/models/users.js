var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name: {type: String, required: true, minlength: 3, maxlength: 20,},
  _questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
},{timestamps:true})
mongoose.model('User', UserSchema);
