app.factory('sessionFactory', function($http, $location){
  var factory = {};
  factory.login = function(user, callback){
    $http.post('/login', user).then(function(output){
      if(output.data){
        $location.url('/wall')
      }
    })
  }
  factory.checkStatus = function(cb){
    $http.get('/checkstatus').then(function (output) {
      if(!output.data){
        $location.url('/')
      }else {
        cb(output.data)
      }
    })
  }
  return factory;
})
//Wall factory
app.factory('wallFactory', function($http){
  var factory = {};

  factory.submitNewMessage = function (data, cb) {
    $http.post('/messages/new', data).then(function(output){
      cb(output.data);
    });
  }
  factory.submitNewComment = function (data, cb) {
    $http.post('/comments/new', data).then(function(output){
      cb(output.data);
    });
  }
  factory.getAllMessages = function(cb){
    $http.get('/messages/all').then(function(output){
      cb(output.data);
    });
  }

  return factory;
})
