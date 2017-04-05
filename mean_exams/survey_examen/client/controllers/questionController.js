app.controller('questionController', function ($scope, questionFactory, $routeParams) {
  var errors = [];
  questionFactory.getAll(function (data) {
    $scope.questions = data;
  })
  $scope.createPoll = function (id) {
    $scope.errors = [];
    if (!$scope.newQuestion || !$scope.newQuestion.content || !$scope.newQuestion.option1 || !$scope.newQuestion.option2 || !$scope.newQuestion.option3 || !$scope.newQuestion.option4) {
      $scope.errors.push('Input field cannot be blank!');
    }else if ($scope.newQuestion.content.length < 3) {
      $scope.errors.push('Question must be at least 3 characters long!')
    }else {
      $scope.newQuestion._id = id;
      questionFactory.createPoll($scope.newQuestion);
      $scope.newQuestion = {};
    }
  }
  function getQuestion(id) {
    questionFactory.show(id, function (data) {
      $scope.question = data;
    })
  }
  if ($routeParams.id) {
    getQuestion($routeParams.id)
  }
  $scope.delete = function(id){
        questionFactory.delete(id, function(data){
          questionFactory.getAll(function (data) {
            $scope.questions = data;
             })
        })
    }
  $scope.vote = function(index) {
    questionFactory.vote($routeParams.id, index, function () {
      getQuestion($routeParams.id)
    })
  }
})
