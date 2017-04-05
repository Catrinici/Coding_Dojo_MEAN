myAppModule.controller('associationsController',function($scope,teamFactory, playerFactory){
  $scope.teams = [];
  $scope.players = [];

  teamFactory.getTeams(function(teams){
    $scope.teams = teams;
  })
  playerFactory.getPlayers(function(players){
    $scope.players = players;
  })
//function add player to team
  $scope.addPlayerToTeam = function(){
     playerFactory.addPlayerToTeam($scope.newAssoc);
  }
  //Pass $index to PlayerFactory to remove the player's team
  $scope.removePlayerFromTeam = function($index){
     playerFactory.removePlayerFromTeam($index);
  }
});
