var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name:{type:String},
  age:{type:Number}
},{timestamps:true})
mongoose.model("User",UserSchema);
var User = mongoose.model("User")

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  var user = new User({name:req.body.name, age:req.body.age});
  user.save(function(err){
    if(err){
      res.render('index',{title:'Something went wrong!',errors:user.errors})
    } else {
      res.redirect('users',{title:'Succesfully added a user!'});
    }
  })
})
app.get('/users', function(req, res) {
  User.find({}, function(err,users){
    if(err){
      res.send(err);
    }
    res.send(users);
  });
})


app.listen(8000, function() {
console.log("listening on port 8000");
})
