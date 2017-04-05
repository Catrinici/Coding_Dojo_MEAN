myAppModule.factory('teamFactory',function(){

  var teams = [
    {name:"Cusmirca"},
    {name:"Nucareni"},
    {name:"Tintareni"}
  ];
  var factory = {};
//Pass the team list to the controller
  factory.getTeams = function(callback){
    callback(teams);
  }
  factory.addTeam = function(team){
    teams.push(team);
 }

  factory.deleteTeam = function($index){
    teams.splice($index,1);
  }

  return factory;
});
