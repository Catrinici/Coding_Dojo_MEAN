var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = (function(){
  return{
    getAllMessages:function(req, res){
      Message.find({}).populate([{path:'_user'},{path: '_comments', populate:{path:'_user'}}]).exec(function(err, mess) {
        if(err){
          console.log("Where is an error saving message getting all messages");
        }else {
          res.json(mess);
        }
      });
    },
    addMessage:function(req, res){
      var mess = new Message({content:req.body.content, _user:req.body._user})
      mess.save(function(err){
        if(err){
          console.log("Where is an error saving message");
        }
        else {
          res.redirect('/messages/all');
        }
      })
    }
  }
})();
