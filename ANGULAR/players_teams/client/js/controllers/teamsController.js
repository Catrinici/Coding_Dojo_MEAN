myAppModule.controller('teamsController',function($scope,teamFactory) {
  $scope.teams = [];

  teamFactory.getTeams(function(teams){
    $scope.teams = teams;
  })
  
  $scope.addTeam = function(){
    teamFactory.addTeam($scope.newTeam)
    $scope.newTeam = {}; //Reset newTeam form
  }
  $scope.deleteTeam = function($index){
    teamFactory.deleteTeam($index);
  }
});
