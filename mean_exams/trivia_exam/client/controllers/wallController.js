app.controller('wallController', function($scope, wallFactory, $location, $routeParams){
    $scope.name = "";
    $scope.error_login = "";
    $scope.showPrompt = true;

    $scope.error_message = "";
    $scope.message = "";
    $scope.scores = [];

    if($routeParams.score){
        $scope.message = "Your score is " + $routeParams.score + "/3 ";
    }

    // validation
    wallFactory.getError(function(data){
      if(data != ""){
        $scope.error_message = data;
      }
    });
    //get message
    wallFactory.getMessage(function(data){
      if(data != ""){
        $scope.message = data;
      }
    });
    // get all scores
    wallFactory.getScores(function(data){
       $scope.scores = data;
    });

    wallFactory.getUser(function(data){
        if(data != ""){
            $scope.name = "";
            $scope.showPrompt = false;
        } else {
            console.log("need to log in");
        }
    });

    $scope.logout = function(){
        wallFactory.setUser("", function(){
            $scope.name = "";
            $scope.showPrompt = true;
        });
    };

    $scope.enter = function(){
      if($scope.name !== ""){
        wallFactory.setUser($scope.name, function(){
          $scope.showPrompt = false;
        });
    } else {
        $scope.error_login = "Please enter a name with at least one letter.."
    }
    };
    $scope.playGame = function(){
        $location.url('play_game');
    };
});
