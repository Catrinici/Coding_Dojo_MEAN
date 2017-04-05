var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');

module.exports = {
  new:function(req, res){
    res.render('new');
  },
  index: function(req, res){
    Dog.find({})
  },
  index:function(req, res){
    Dog.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('show', { dog: response[0] });
    });
  },
  edit:function(req, res){
    Dog.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('edit', { dog: response[0] });
    })
  },
  update:function(req, res){
    Dog.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  },
  delete:function(req, res){
    Dog.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  },
  create:function(req, res){
    // Create a new dog!
    Dog.create(req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/')
    });
  }
}
