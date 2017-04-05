var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = (function () {
  return{
    add: function (req, res) {
      console.log(req.body);
      var question = new Question({content: req.body.content, _user: req.body._id})
      question.options.push({option: req.body.option1})
      question.options.push({option: req.body.option2})
      question.options.push({option: req.body.option3})
      question.options.push({option: req.body.option4})
      question.save(function (err, data) {
        User.findOne({_id: req.body._id},function (err, user) {
          user._questions.push(data._id);
          user.save(function (err, userData) {
            res.json(data)
          })
        })
      })
    },
    getAll: function (req, res) {
      Question.find({})
      .populate('_user')
      .exec(function (err, questions) {
        res.json(questions)
      })
    },
    show: function (req,res) {
      Question.findOne({_id:req.params.id})
      .populate('_user')
      .exec(function (err, questions) {
        res.json(questions)
      })
    },
    delete: function (req, res) {
      Question.remove({_id:req.params.id}, function (err) {
        if (!err) {
          res.json(true)
        }
      })
    },
    vote: function(req, res) {
      Question.findOne({_id: req.params.id}, function(err, question) {
        if (err) {
          console.log(err);
        }
        question.options[req.params.index].vote++
        question.save(function (err) {
          if (err) {
            console.log(err);
          }
          res.json({status: 'ok'})
        })
      })

    }
  }
})()
