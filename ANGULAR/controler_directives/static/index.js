var app = angular.module('app',[]);
app.controller('foods.Controller',['$scope',function($scope){
  $scope.foods = [];
  $scope.addFood = function(){
    $scope.foods.push($scope.food);
    $scope.food="";
  }
}]);
