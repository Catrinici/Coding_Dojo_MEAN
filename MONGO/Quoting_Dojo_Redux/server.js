
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
//Set up database connection,Schema model
var QuoteSchema = new mongoose.Schema({
  name:String,
  quote:String
});

var Quote = mongoose.model('quotes',QuoteSchema);

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//Routes!
app.get('/', function(req, res) {
res.render('index');
})

app.get('/quotes', function(req, res) {
  Quote.find({},function(err,results){
    if(err){console.log(err);}
    res.render('quotes',{quotes:results});
  });
});

app.post('/quotes', function(req, res) {
  Quote.create(req.body,function(err){
    console.log(req.body);
    if(err){console.log(err);}
    res.redirect('/quotes')
  });
});

app.listen(8000, function() {
console.log("listening on port 8000");
})
