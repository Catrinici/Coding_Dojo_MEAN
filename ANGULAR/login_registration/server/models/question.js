var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: {type:String, required:true, minlength:15},
  correct_answer:{type:String, required:true},
  fake_answer1:{type:String, required:true},
  fake_answer2:{type:String, required:true}
}, {timestamps:true});

mongoose.model('Question', QuestionSchema);
