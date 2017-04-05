var myAppModule = angular.module('myApp', ['ngRoute','ngMessages']);
myAppModule.factory('playerFactory',function(){
  var players = [
    {name:"Misa", team:""},
    {name:"Nelu",team:""},
    {name:"Victor", team:"Tintareni"}
  ];
  var factory = {};
//Pass the player list to the controller
  factory.getPlayers = function(callback){
    callback(players);
  }
  //Add player
  factory.addPlayer = function(player){
    player.team = "";
    players.push(player);
  }
  factory.deletePlayer = function($index){
    players.splice($index,1);
  }
  //Set a player's team name
   factory.addPlayerToTeam = function(data){
      players[data.playerIdx].team = data.team;
   }
   //Reset a player's team name to an empty string
   factory.removePlayerFromTeam = function($index){
      players[$index].team = "";
   }

  return factory;
})
