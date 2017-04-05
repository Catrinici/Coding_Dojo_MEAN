app.controller('newController', function($scope, wallFactory, $location){
    $scope.name = "";
    $scope.error_message = "";
    wallFactory.getUser(function(data){
      if(data == ""){
        $location.url('/')
    } else {
        $scope.name = data;
        }
    });

    $scope.logout = function(){
    wallFactory.setUser("", function(){
      $location.url('/')
      });
    };

    $scope.cancel = function(){
    wallFactory.setError("Submission Canceled", function(){
      $location.url('/');
      });
      $scope.newQuestion = {};
    };

    $scope.submit = function(){
      if( !$scope.newQuestion ||
          !$scope.newQuestion.question ||
          !$scope.newQuestion.correct_answer ||
          !$scope.newQuestion.fake_answer1 ||
          !$scope.newQuestion.fake_answer2
      ){
          $scope.error_message = "All fields must be filled";
      } else {
          if($scope.newQuestion.question.length < 15){
              $scope.error_message = "Question must be at least 15 characters long";
        } else {
            $scope.error_message = "";
            wallFactory.newQuestion($scope.newQuestion, function(){
              wallFactory.setMessage("Successfully saved a new question!", function(){
            $location.url('/');
            });
          })
        }
      }
    $scope.newQuestion = {};
  }
});
