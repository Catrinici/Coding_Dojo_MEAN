var mongoose = require('mongoose');
var Schema = mongoose.Schema

var OptionSchema = new Schema({
  option: {type: String, required: true, minlength: 3},
  vote:   {type: Number, default: 0},
},{timestamps:true})

var QuestionSchema = new Schema({
  content: {type: String, required: true, minlength: 3, maxlength: 20, trim: true},
  _user:   {type: Schema.Types.ObjectId, ref: 'User'},
  options: [OptionSchema]
},{timestamps:true})
mongoose.model('Question', QuestionSchema);
