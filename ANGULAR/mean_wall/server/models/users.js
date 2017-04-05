var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name:{type:String, required:true, minlength:3, maxlength:20},
  _message:[{type:Schema.Types.ObjectId, ref:'Message'}],
  _comments:[{type:Schema.Types.ObjectId, ref:'Comment'}]
},{timestamps:true});


mongoose.model('User', UserSchema)
