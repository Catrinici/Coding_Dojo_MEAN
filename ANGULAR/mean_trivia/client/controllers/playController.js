app.controller('playController', function($scope, wallFactory, $location){
  $scope.name = "";
  $scope.error_message = "";

  wallFactory.getUser(function(data){
      if(data == ""){
        $location.url('/')
      } else {
        $scope.name = data;
      }
  });
  wallFactory.getQuestions(function(output){
    $scope.questions = [];

    if(output.length < 3){
      $scope.error_message = "Please add at least 3 questions to continue";

    } else {
        var tempArr = output;
        $scope.questions = [];

        while($scope.questions.length < 3){
          var rand = Math.floor(Math.random() * (tempArr.length - 1) + 0);
          $scope.questions.push(tempArr[rand]);
          tempArr.splice(rand, 1);
        }

    for(var j=0; j < $scope.questions.length; j++){
      var answers = [];

      var rand2 = Math.floor(Math.random() * (3) + 1);

      if(rand2 == 1){
          answers.push($scope.questions[j].correct_answer);
          answers.push($scope.questions[j].fake_answer1);
          answers.push($scope.questions[j].fake_answer2);
      } else if (rand2 == 2){
          answers.push($scope.questions[j].fake_answer1);
          answers.push($scope.questions[j].correct_answer);
          answers.push($scope.questions[j].fake_answer2);
      } else {
          answers.push($scope.questions[j].fake_answer1);
          answers.push($scope.questions[j].fake_answer2);
          answers.push($scope.questions[j].correct_answer);
      }
      $scope.questions[j].answersArr = answers;
            }
        }
    });

    $scope.cancel = function(){
    wallFactory.setError("Game Canceled", function(){
      $location.url('/');
    });

    };

    $scope.submit = function() {
      if(!$scope.answer || !$scope.answer.one || !$scope.answer.two || !$scope.answer.three ){
          $scope.error_message = "All questions must be answered";
      } else {
          $scope.error_message = "";
          var score = 0;

          if($scope.answer.one == $scope.questions[0].correct_answer){
              score++;
          }
          if ($scope.answer.two == $scope.questions[1].correct_answer){
              score++;
          }
          if($scope.answer.three == $scope.questions[2].correct_answer){
              score++;
          }

        var obj = {
            name: $scope.name,
            score: score
        };

        wallFactory.saveScore(obj, function(){
          $location.url('score/' + obj.score);
            });
        }
    };
});
