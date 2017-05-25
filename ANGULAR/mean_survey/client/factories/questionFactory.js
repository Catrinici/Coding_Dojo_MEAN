app.factory('questionFactory', function ($http, $location) {
  var factory = {}
  factory.questions = [];
  factory.getAll = function (cb) {
    $http.get('/questions/getall').then(function (output) {
      cb(output.data)
    })
  }
  factory.createPoll = function (question) {
    $http.post('/questions/add', question).then(function (output) {
      factory.questions.push(output.data)
      $location.url('/dashboard')
    })
  }
  factory.show = function (id,callback) {
    $http.get('/questions/' + id).then(function (output) {
      console.log(output.data);
      callback(output.data)
    });
  }
  factory.delete = function(id, cb){
        $http.get('/questions/' + id + '/delete').then(function(output){
          $location.url('/dashboard')
            cb(output.data);
        });
    }
  factory.vote = function(questionId, index, callback) {
    $http.get('/questions/' + questionId + '/vote/' + index)
    .then(callback)
  }
  return factory;
})
