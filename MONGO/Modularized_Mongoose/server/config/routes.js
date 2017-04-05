var dogs = require('../controllers/dogs.js');

module.exports = function(app) {
  app.get('/', function(req, res){
    // res.render('index')
    dogs.index(req,res)
  })
  app.post('/', function(req, res){
    dogs.create(req,res)
  })
  app.get('/new', function(req, res){
    dogs.new(req,res)
  })
  app.get('/:id', function(req, res){
    dogs.show(req,res)
  })
  app.get('/:id/edit/', function(req, res){
    dogs.show(req,res)
  })
  app.post('/:id', function(req, res){
    res.redirect('/')
  })
  app.post('/:id/delete', function(req, res){
    res.redirect('/')
  })
}
