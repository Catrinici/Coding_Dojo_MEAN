app.factory('wallFactory', function ($http) {
  var factory = {};
  var user = "";

  var error = "";
  var message = "";

  factory.setUser = function(data, callback){
      user = data;
      callback();
  };
  factory.getUser = function(callback){
      callback(user);
  };

  factory.setError = function(data, callback){
      error = data;
      callback();
  };
  factory.getError = function(callback){
      callback(error);
  };

  factory.setMessage = function(data, callback){
      message = data;
      callback();
  };
  factory.getMessage = function(callback){
      callback(message);
  };

  factory.newQuestion = function(data, callback){
      $http.post('/newQuestion', data).then(function(output){
        callback();
      });
  };

  factory.getQuestions = function(callback){
    $http.get('/getQuestion').then(function(output){
      callback(output.data);
    });
  };

  factory.saveScore = function(data, callback){
    $http.post('/saveScore', data).then(function(output){
      callback();
    });
  };

  factory.getScores = function(callback){
    $http.get('/getScores').then(function(output){
      callback(output.data);
    });
  };
  return factory;
});
