var user = require("./../controllers/session.js");
var messages = require("./../controllers/messages.js");
var comments = require("./../controllers/comments.js");

module.exports = function(app){
  app.post('/login', function(req, res){
    user.login(req, res);
  })
  app.get('/checkstatus', function(req, res){
    user.checkStatus(req, res)
  })
  app.get('/logout', function(req, res){
    user.logout(req, res)
  })
  //Message Routes
  app.get('/messages/all', function(req, res){
    messages.getAllMessages(req, res);
  })
  app.post('/messages/new', function(req, res){
    messages.addMessage(req, res);
  })
  //Comment Routes
  app.post('/comments/new', function(req, res){
    comments.addComment(req, res);
  });
}
