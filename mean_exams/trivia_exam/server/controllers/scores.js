var mongoose = require('mongoose');
var Score = mongoose.model('Score');
module.exports = (function() {
    return {
        saveScore: function(req, res) {
        console.log(req.body);

        var score = new Score(req.body);
        score.save(function(err){
          if(err){
            console.log(err);
          } else {
            console.log(score);
            res.json(score);
            }
          })
        },
        getScores: function(req, res) {
          Score.find({}, function(err, result){
            if(err){
              console.log(err);
          } else {
             console.log(result);
             res.json(result);
            }
          })
        }
    }
})();
