app.controller('sessionController', function($scope, sessionFactory){

  sessionFactory.checkStatus(function(data){
    $scope.curUser = data;
  })

  $scope.login = function(){
    $scope.errors = [];
    if(!$scope.user || !$scope.user.name || $scope.user.name.length < 3){
      $scope.errors.push("please enter an username!");
    } else if ($scope.user.name.length > 20) {
      $scope.errors.push("Username shouldn't be longer than 20 chars!");
    } else {
      sessionFactory.login($scope.user);
      $scope.user = {};
    }
  }
});
//wallController
app.controller('wallController', function($scope, sessionFactory, wallFactory, $location){

  $scope.curUser = {};
  $scope.messages = [];

  sessionFactory.checkStatus(function(data){
    $scope.curUser = data;
    console.log(data);
    if(!data._id){
      //redirect to the login page
      $location.url('/')
    }
  });

  wallFactory.getAllMessages(function(output){
    $scope.messages = output;

  })

  $scope.submitNewMessage = function(){
    $scope.newMessage._user = $scope.curUser._id;

    console.log($scope.newMessage);

  //Run factory method to save the new Mess
  wallFactory.submitNewMessage($scope.newMessage, function(output){
    $scope.messages = output;

  })
    $scope.newMessage = {}
  }
   // functions for comments
  $scope.submitNewComment = function(id, content){
    var newComment = {};
    newComment._curUser = $scope.curUser._id;
    newComment.content = content;
    newComment._message = id;

    console.log(newComment);
    //run the factory
    wallFactory.submitNewComment(newComment, function(output){
      $scope.messages = output;

    })
    $scope.newComment = {}
  }


  })
