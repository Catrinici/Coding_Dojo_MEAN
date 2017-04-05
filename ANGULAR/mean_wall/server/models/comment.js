var mongoose = require('mongoose');
var Schema = mongoose.Schema


var CommentSchema = new Schema({
  content:{type:String, required:true, minlength:3, maxlength:200},
  _user:{type:Schema.Types.ObjectId, ref:'User'},
  _message: [{type:Schema.Types.ObjectId, ref:'Message'}]
},{timestamps:true});



mongoose.model('Comment', CommentSchema)
