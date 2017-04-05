myAppModule.controller("playersController", function($scope, playerFactory){
   $scope.players = [];

   playerFactory.getPlayers(function(players){
     $scope.players = players;
   })
//Adding a new player
  $scope.addPlayer = function(){
    playerFactory.addPlayer($scope.newPlayer)
    $scope.newPlayer = {}
  }
  $scope.deletePlayer = function($index){
    playerFactory.deletePlayer($index);
  }
})
