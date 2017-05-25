var user = require('./../controllers/session.js');
var question = require('./../controllers/questionController.js');
module.exports = function (app) {
  app.post('/login',function (req, res) {
    user.login(req, res);
  })
  app.get('/checkstatus', function(req, res) {
    user.checkStatus(req, res)
  })
  app.get('/logout', function (req, res) {
    console.log("about to log out");
    user.logout(req, res)
  })
  // ********************************
  app.post('/questions/add', function (req,res) {
    question.add(req,res);
  })
  app.get('/questions/getall', function (req,res) {
    question.getAll(req,res);
  })
  app.get('/questions/:id',function (req,res) {
    question.show(req, res)
  })
  app.get('/questions/:id/delete',function (req,res) {
    question.delete(req, res)
  })
  app.get('/questions/:id/vote/:index',function (req,res) {
    question.vote(req, res)
  })
}
