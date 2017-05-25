var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function() {
    return {
        newQuestion: function(req, res) {
          var question = new Question(req.body);
          question.save(function(err){
              if(err){
                console.log(err);
              } else {
                console.log(question);
                res.json(question);
              }
          });
        },
        getQuestion: function(req, res) {
          Question.find({}, function(err, result){
              if(err){
                console.log(err);
              } else {
                console.log(result);
                  res.json(result);
              }
          });
        }
    }
})();
