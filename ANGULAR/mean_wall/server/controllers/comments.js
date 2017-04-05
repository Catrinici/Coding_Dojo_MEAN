var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');
var User = mongoose.model('User');


module.exports = (function(){
  return{
    addComment:function(req, res){
      var com = new Comment({content: req.body.content, _user: req.body._user, _message: req.body._message});
      com.save(function(err){
        if(err){
          console.log(err);
        }else{
          // We know the comment is already saved
          Message.findOne({_id: req.body._message}, function(err, oneMessage){
            if(err){
              console.log(err);
            } else {
              oneMessage._comments.push(com._id);

              // Save the changes
              oneMessage.save(function(err){
                if(err){
                  console.log("error");
                } else {
                  res.redirect('/messages/all');
                }
              })
            }
          });
        }
      })
    }
  }
})();
